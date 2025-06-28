import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useIntersectionObserver from "../../public/js/IntersectObserver";

const Contact = () => {
  const form = useRef();
  const cardRef = useRef(null);
  const [done, setDone] = useState(false);
  const isVisible = useIntersectionObserver(cardRef);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    const payload = {
      to: ["rohitkumarrr2022@gmail.com"], // Static recipient
      subject: `Message from ${name}`,
      body: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      isBodyHtml: true,
    };

    try {
      const response = await fetch("https://dev_apigateway.lycee.in/api/Notification/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      toast.success("Email Sent Successfully");
      setDone(true);
      form.current.reset();
      setTimeout(() => setDone(false), 3000);
    } catch (err) {
      toast.error("Failed to send message");
      console.error(err);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h1>
          <p className="py-3 text-xl text-gray-400">
            Your inquiry is welcomed! We'll respond within 24 hours to assist
            you further.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div
            ref={cardRef}
            className={`relative bg-gray-900 rounded-xl p-8 shadow-lg shadow-gray-700 hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 ${
              isVisible ? "animate-pop-up" : "opacity-0"
            }`}
          >
            <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <motion.input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="p-2 bg-gray-800 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-gray-800 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-gray-800 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>
              <motion.button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Let's Talk
              </motion.button>
            </form>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-cyan-600 p-4 rounded-md mt-4 text-white text-center"
              >
                <p className="font-semibold text-lg">
                  Thanks for reaching out!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

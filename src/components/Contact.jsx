import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

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

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Failed to send message");
      console.error(err);
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-3 justify-start">
            Your inquiry is welcomed! We'll respond within 24 hours to assist
            you further.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            ref={form}
            onSubmit={sendEmail}
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
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
        </div>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-green-500 p-4 rounded-md mt-4 text-white text-center"
          >
            <p className="font-semibold text-lg">Thanks for reaching out!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;

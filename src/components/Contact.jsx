import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_o57ncee", "template_d5gb5z7", form.current, {
        publicKey: "ZQEoyzs4PFJWK-gKR",
      })
      .then(() => {
        console.log("Success");
        toast.success("Email Sent");
        setDone(true);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error(error);
      });
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

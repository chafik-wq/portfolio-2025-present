import React, { useRef, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    },
    [setForm]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Chafik",
            from_email: form.email,
            to_email: "chafik22266@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            //alert("Thank you. I will get back to you as soon as possible.");
            // make amazing alert here
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Thank you. I will get back to you as soon as possible.",
              showConfirmButton: false,
              timer: 3500,
              theme: "dark",
              background: "#915EFF",
              color: "#fff",
              iconColor: "#fff",
              showClass: {
                popup: "swal2-show", // Keeps the popup animation
                icon: "", // Disables the icon animation
              },
            });

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            //alert("Ahh, something went wrong. Please try again.");
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Ahh, something went wrong. Please try again.",
              showConfirmButton: false,
              timer: 4500,
              theme: "dark",
              background: "#915EFF",
              color: "#fff",
              iconColor: "#fff",
              showClass: {
                popup: "swal2-show", // Keeps the popup animation
                icon: "", // Disables the icon animation
              },
            });
          }
        );
    },
    [form],
  );

  const formContent = useMemo(
    () => (
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    ),
    [form, handleChange, handleSubmit, loading],
  );

  const memorizedSlideInLeftTween021 = useMemo(
    () => slideIn("left", "tween", 0.2, 1),
    [slideIn]
  );

  const memorizedSlideInRightTween021 = useMemo(
    () => slideIn("right", "tween", 0.2, 1),
    [slideIn]
  );

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={memorizedSlideInLeftTween021}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {formContent}
      </motion.div>

      <motion.div
        variants={memorizedSlideInRightTween021}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(React.memo(Contact), "contact");

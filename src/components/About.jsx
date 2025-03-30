/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  
  const memorizedFadeInRightSpringIndex05075 = useMemo(
    () => fadeIn("right", "spring", index * 0.5, 0.75),
    [fadeIn]
  );

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={memorizedFadeInRightSpringIndex05075}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {

  const memorizedTextVariant = useMemo(() => textVariant(), [textVariant]);

  const memorizedFadeIn011 = useMemo(() => fadeIn("", "", 0.1, 1), [fadeIn]);

  const memorizedServices = useMemo(
    () =>
      services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      )),
    [services]
  );

  return (
    <>
      <motion.div variants={memorizedTextVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={memorizedFadeIn011}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I{"'"}m a self-taught frontend developer with expertise in JavaScript,
        React.js, Next.js, and experience in Node.js and Python. Passionate
        about building high-performance, user-friendly applications, I stay
        up-to-date with the latest web technologies. Open to new opportunities
        in web development—let{"'"}s create something great together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">{memorizedServices}</div>
    </>
  );
};

export default SectionWrapper(React.memo(About), "about");

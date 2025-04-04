import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import React from 'react';

const StarWrapper = (Component, idName) =>
  function HOC() {

    const memorizedStaggerContainer = React.useMemo(
      () => staggerContainer(),
      [staggerContainer]
    );

    return (
      <motion.section
        variants={memorizedStaggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

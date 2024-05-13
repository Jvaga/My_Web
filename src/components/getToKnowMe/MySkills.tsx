import { motion } from "framer-motion";
import React, { useRef } from "react";
import "./MySkills.scss";

const variantsTitle = {
  initial: {
    // x: -200,
    y: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const variantsDeveloper = {
  initial: {
    // x: 200,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const variantsSkillsLeft = {
  initial: {
    x: -300,
    y: 200,
    opacity: 0,
    scale: 2,
  },
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variantsSkillsRight = {
  initial: {
    x: 300,
    y: 150,
    opacity: 0,
    scale: 2,
  },
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const MySkills = () => {
  const ref = useRef(null);

  return (
    <div className="my-skills" ref={ref}>
      <motion.h1
        variants={variantsTitle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        skills
      </motion.h1>

      <motion.div
        className="developer"
        variants={variantsDeveloper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./skills/developer.png" alt="" />
      </motion.div>

      <motion.div
        className="react"
        variants={variantsSkillsLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./skills/react.svg" alt="" />
      </motion.div>
      <motion.div
        className="node"
        variants={variantsSkillsLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./skills/node.svg" alt="" />
      </motion.div>
      <motion.div
        className="sass"
        variants={variantsSkillsRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./skills/sass.svg" alt="" />
      </motion.div>
      <motion.div
        className="typescript"
        variants={variantsSkillsRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./skills/typescript.svg" alt="" />
      </motion.div>
    </div>
  );
};

export default MySkills;

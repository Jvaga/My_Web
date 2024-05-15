import { motion } from "framer-motion";
import { useRef } from "react";
import "./MyWork.scss";
const variantsTitle = {
  initial: {
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
    y: -100,
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

const variantsWeb = {
  initial: {
    x: 0,
    y: 200,
    opacity: 0,
    scale: 0,
  },
  animate: {
    x: 0,
    y: 0,

    opacity: 1,
    rotate: 360,
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const MyWork = () => {
  const ref = useRef(null);

  return (
    <div className="my-work" ref={ref}>
      <motion.h1
        variants={variantsTitle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Entdecken Sie meine Arbeit
      </motion.h1>

      <motion.div
        className="developer"
        variants={variantsDeveloper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="developer-wraper">
          <img src="./portfolio/developer.png" alt="" />
        </div>
      </motion.div>
      <motion.div
        className="web-1"
        initial="initial"
        whileInView="animate"
        variants={variantsWeb}
        viewport={{ once: true }}
      >
        <img src="./portfolio/website-1.png" alt="" />
      </motion.div>
      <motion.div
        className="web-2"
        variants={variantsWeb}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./portfolio/website-2.png" alt="" />
      </motion.div>
    </div>
  );
};

export default MyWork;

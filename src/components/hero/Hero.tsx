import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-390%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Jhonny Vargas</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>See my Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img
            src="/scroll-down.png"
            alt=""
            animate="scrollAnimation"
            variants={textVariants}
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Front End Developer
        </motion.div>
        <div className="imageContainer">
          <img src="/jhonny.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { motion } from "framer-motion";
import "./Skills.scss";
import Skill from "./skill/Skill";
import data from "./skill/data.json";

const variants = {
  initial: {
    x: -500,
    y: 100,
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

const Skills = () => {
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="wrapper">
        {data.map((item, i) => (
          <Skill key={i} title={item.title} img={item.img} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

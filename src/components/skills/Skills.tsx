import { motion } from "framer-motion";
import "./Skills.scss";
import Skill from "./skill/Skill";
import data from "./skill/data.json";

const variants = {
  initial: {
    x: 100,
    y: 100,
    opacity: 0,
  },
  animate: (i: number) => ({
    x: 0,
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1 * i,
    },
  }),
};

const Skills = () => {
  return (
    <div className="skills">
      <motion.div className="skills-wrapper">
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            {" "}
            <Skill title={item.title} img={item.img} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

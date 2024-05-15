import { motion } from "framer-motion";
import "./Skills.scss";
import Skill from "./skill/Skill";
import data from "./skill/data.json";
import SkillsHook from "../../hooks/SkillsHook";

const Skills = () => {
  const { variants } = SkillsHook();
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

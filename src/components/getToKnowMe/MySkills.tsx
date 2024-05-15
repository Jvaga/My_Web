import { motion } from "framer-motion";
import "./MySkills.scss";
import MySkillsHook from "../../hooks/MySkillsHook";
import { useRef } from "react";

const MySkills = () => {
  const ref = useRef(null);
  const {
    variantsTitle,
    variantsDeveloper,
    variantsSkillsLeft,
    variantsSkillsRight,
  } = MySkillsHook();

  return (
    <div className="my-skills" ref={ref}>
      <motion.h1
        className="title"
        variants={variantsTitle}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Kenntnisse
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

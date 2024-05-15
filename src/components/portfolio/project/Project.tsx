import "./Project.scss";
import { motion } from "framer-motion";

import ProjectHook from "../../../hooks/ProjectHook";

interface ProjectProps {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const Project = (props: ProjectProps) => {
  const { variantsImg, variantstext } = ProjectHook();
  return (
    <section className="project">
      <div className="container">
        <motion.div
          className="img-container"
          variants={variantsImg}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img src={props.img} alt="" />
        </motion.div>
        <motion.div
          className="textContainer"
          variants={variantstext}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-wrapper">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>

            <button>Sieh code</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

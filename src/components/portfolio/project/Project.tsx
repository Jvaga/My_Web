import "./Project.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const Project = (props: ProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        
        <img src={props.img} alt="" />
        <motion.div className="textContainer" style={{ y: y }}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <button>Sieh Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

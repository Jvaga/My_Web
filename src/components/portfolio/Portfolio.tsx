import { motion, useScroll, useSpring } from "framer-motion";
import "./Portfolio.scss";
import data from "./data.json";
import Project from "./project/Project";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Meine Projekte</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {data.map((item, i) => (
        <Project
          key={i}
          id={0}
          title={item.title}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Portfolio;

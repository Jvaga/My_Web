import "./Parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  type: string;
}

const Parallax = (props: ParallaxProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-130%", "-50%"]);

  let title;
  switch (props.type) {
    case "services":
      title = "warum Sie mich kennenlernen sollten";
      break;
    case "Skills":
      title = "Kenntnisse";
      break;
    case "portfolio":
      title = "Portfolio";
      break;
  }

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          props.type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d) "
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>{title}</motion.h1>
      {/* <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars"></motion.div> */}
    </div>
  );
};

export default Parallax;

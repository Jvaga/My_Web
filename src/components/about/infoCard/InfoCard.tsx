import { motion, useAnimation, useInView } from "framer-motion";
import "./Infocard.scss";
import { useEffect, useRef } from "react";

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard = (props: InfoCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("end");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      className="infoCard"
      ref={ref}
      variants={{ start: { opacity: 0, y: 75 }, end: { opacity: 1, y: 0 } }}
      initial="start"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {" "}
      <div className="wrapper">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>{" "}
    </motion.div>
  );
};

export default InfoCard;

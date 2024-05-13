import { motion, useAnimation, useInView } from "framer-motion";
import "./Infocard.scss";
import { useEffect, useRef } from "react";

interface InfoCardProps {
  title: string;
  text: string;
}

const variants = {
  initial: {
    x: 50,

    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

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
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="infoCard__wrapper">
        <img src="/box.png" alt="" />
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;

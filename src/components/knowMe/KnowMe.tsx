import "./KnowMe.scss";
import { motion } from "framer-motion";
import KnowMeHook from "../../hooks/KnowMeHook";

const title = "warum Sie mich kennenlernen sollten";

const KnowMe = () => {
  const text = title.split("");
  const { variantsTitle, variants } = KnowMeHook();

  return (
    <div className="knowMe">
      <motion.h1>
        {text.map((item, i) => (
          <motion.span
            key={i}
            variants={variantsTitle}
            initial="hidden"
            whileInView="reveal"
            custom={i}
            viewport={{ once: true }}
          >
            {item}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="img"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img src="./sapiens.png" alt="" />
      </motion.div>
    </div>
  );
};

export default KnowMe;

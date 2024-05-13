import "./KnowMe.scss";
import { motion } from "framer-motion";

const variantsTitle = {
  hidden: {
    opacity: 0,
  },
  reveal: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.04 * i },
  }),
};

const variants = {
  initial: {
    x: 200,
    y: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const title = "warum Sie mich kennenlernen sollten";

const KnowMe = () => {
  const aa = title.split("");
  console.log(aa);

  return (
    <div className="parallax">
      <motion.h1>
        {aa.map((item, i) => (
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
        className="mountains"
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

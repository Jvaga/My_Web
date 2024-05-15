import { motion } from "framer-motion";
import "./Links.scss";

interface ToggleButtonProps {
  setOpen: React.Dispatch<boolean>;
  variant: boolean;
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = (props: ToggleButtonProps) => {
  const items = ["Homepage", "Über mich", "Kenntnisse", "Portfolio"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => (
        <motion.a
          href={`#${item}`}
          key={i}
          variants={itemsVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.setOpen(!props.variant)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

import { motion, useScroll } from "framer-motion";
import "./About.scss";
import InfoCard from "./infoCard/InfoCard";
import data from "./infoCard/data.json";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div className="about">
      <div className="wrapper">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="5"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul ref={ref}>
          {data.map((item, i) => (
            <li key={i}>
              <InfoCard title={item.title} text={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

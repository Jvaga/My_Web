import "./About.scss";
import InfoCard from "./infoCard/InfoCard";
import data from "./infoCard/data.json";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        {" "}
        {data.map((item, i) => (
          <InfoCard key={i} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default About;

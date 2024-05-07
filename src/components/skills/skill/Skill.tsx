import "./Skill.scss";

interface SkillProps {
  title: string;
  img: string;
}

const Skill = (props: SkillProps) => {
  return (
    <div className="skill">
      <div className="wrapper">
        <h1>{props.title}</h1>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Skill;

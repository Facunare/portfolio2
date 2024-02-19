import React from "react";
import "./Styles/SkillsStyle.css"

const Skills = ({image, name, color}) => {

  return (
    <div className="skill" style={{ "--color": color }}>
      <img src={image} alt={`Facundo Arechaga - Skill - ${name}`} />
      <span>{name}</span>
    </div>
  );
};

export default Skills;

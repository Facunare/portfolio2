import React from "react";
import "./Styles/SkillsStyle.css"

const Skills = ({image, name}) => {

  return (
    <div className="skill">
      <img src={image} alt={`Facundo Arechaga - Skill - ${name}`} />
    </div>
  );
};

export default Skills;

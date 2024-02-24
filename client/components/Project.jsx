
import React from "react";
import "./Styles/SkillsStyle.css"

const Project = ({project, language}) => {

  return (
    <article key={project._id}>
        <a className="link_principal" href={`project/${project._id}`}>
            <img className="projectImage" src={"/assets/"+project.thumbnail} alt={`Facundo Arechaga - Project - ${project.title}`} />
            <div className="work-overlay">
                <h3>{project.title}</h3>
                {language == "en" ? (<p>{project.description.en}</p>) : (<p>{project.description.es}</p>)}
                <ul>
                {project.technologies.map((skill, index)=> (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
                <div className="links">
                {project.github && <a  className="github" href={project.github} target="_blank"><i className='bx bxl-github'></i></a>}
                {project.link && <a className="link" href={"http://"+project.link} target="_blank"><i className='bx bx-link-alt'></i></a>}
                </div>
            </div>
        </a>
    </article>
  );
};

export default Project;

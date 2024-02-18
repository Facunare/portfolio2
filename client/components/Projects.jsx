import React, { useEffect, useState } from "react";
import "./Styles/projectsStyle.css";
import useFetch from '../custom_hooks/useFetch'
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { language, changeLanguage } = useLanguage();
  const [data, fetchData] = useFetch([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    allProjects();
  }, []);


  const allProjects = () => {
    // fetchData('http://localhost:3000/projects/');
    fetchData('facundoarechaga1.vercel.app/projects/');
  };

  const handleShowMore = () => {
    setShowMore(true);
  };
  const handleShowLess = () => {
    setShowMore(false);
  };



  return (
    <div className="container3" id="container3">
      <h2>{language == "en" ? "PROJECTS" : "PROYECTOS" }</h2>
      <div className="projects">
        {data && data.slice(0,4).map((project) => (
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
        ))}
        {showMore && data.slice(4).map((project)=> (
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

                {project.link && <a className="link" href={"http://"+project.link} target="_blank"><i className='bx bx-link-alt'></i></a>}
                {project.github && <a  className="github" href={project.github} target="_blank"><i className='bx bxl-github'></i></a>}
              </div>
            </div>
          </a>
        </article>
        ))}
        
        <article>
            <a href="https://github.com/Facunare/"  target="_blank">
              <img className="projectImage" alt="Facundo Arechaga - GitHub" src="../public/assets/github.png"/>
              <div className="work-overlay">
                <h3>GitHub</h3>
                <p>{language == "en" ? "Access my GitHub to see all my other projects and contact me." : "Accede a mi GitHub para ver todos mis otros proyectos y contactarme." }</p>
              </div>
            </a>
          </article>
      </div>
          {data.length > 4 && !showMore ? (
            <details>
              <summary onClick={handleShowMore}>{language == "en" ? "Show more" : "Ver más" }</summary>           
            </details>
          ) : (
            <details>
              <summary onClick={handleShowLess}>{language == "en" ? "Show less" : "Ver menos" }</summary>           
            </details>
          )}
    </div>
  );
};

export default Projects;

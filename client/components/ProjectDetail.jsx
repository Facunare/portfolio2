import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./Header";
import { useLanguage } from "../context/LanguageContext";
import '../public/darkMode.css'
import { useDarkMode } from "../context/DarkModeContext";
import "./Styles/ProjectDetailStyle.css"



const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const { language, changeLanguage } = useLanguage();
  const { darkMode, changeMode } = useDarkMode()
  
  useEffect(()=>{
        fetch(`https://facundoarechaga1.vercel.app/projects/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setProject(data)
        })
    }, [id])

  
  return (
    <div className={`details ${!darkMode ? "dark" : "whiteDetail"}`}>
      <Header/>
      <div className="projectDetail">
        <h1>{project.title}</h1>
        <h3><a href="../">{language == "en" ? "Home" : "Inicio" }</a> {'>'} <a href="../#container3">{language == "en" ? "Projects" : "Proyectos" }</a> {'>'} <a href={`/project/${project._id}`}>{project.title}</a></h3>
        <div className="project_div">

          {language === "en" ? (<p className="hola">{project.longDesc?.en}</p>) : (<p>{project.longDesc?.es}</p>)}
          <div className="techstack">
            <hr />
            <h2>{language == "en" ? "Tech Stack" : "Tecnologías" }</h2>
            <div className="techLinks">

              <ul className="tech">
                {project.technologies?.map((skill)=> (
                  <li key={skill.id}>{skill}</li>
                ))}
              </ul>
              <div className="linksProjectDetail">

                {project.link && <a className="linkDetail" href={"http://"+project.link} target="_blank"><i className='bx bx-link-alt'></i></a>}
                {project.github && <a  className="githubDetail" href={project.github} target="_blank"><i className='bx bxl-github'></i></a>}
              </div>
            </div>
            {project.moreContent ? <details>
              <summary className="moreInfoDetail">{language == "en" ? "More Info" : "Más información" }</summary>           
              <p>{language == "en" ? project.moreContent?.en : project.moreContent?.es }</p>
            </details>: ""}
          </div>
        </div>
        <div className="images">
            {project.images && project.images.map((foto, index) => (
              <div>
                <img key={index} src={`/assets/projectImages/${project.title}/${foto}.webp`} alt={`Facundo Arechaga - ${project.title} - Image`} className="foto" />
          
              </div>
              
            ))}
            
        </div>
      </div>
    
    </div>
  );
};

export default ProjectDetail;

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Styles/AboutMeStyle.css"

const AboutMe = () => {
  const { language, changeLanguage } = useLanguage();
  
  return (
    <div className="container2" id='container2'>
        <div>
          { language == "en" ? (<h2>ABOUT <span className='me'>ME</span></h2>) : (<h2>SOBRE <span className='me'>MÍ</span></h2>)}
          { language == "en" ? (<p>I am an 18-year-old <span>student</span> and full stack developer graduated as a Computer Technician at the technical secondary school. Passionate about computing, with experience in various projects and starting my career to obtain a degree in digital technology at the Torcuato Di Tella University, constantly seeking <span>to continue acquiring knowledge</span> and contribute to technological progress. Additionally, I am the <span><a href='https://solvefortomorrow.com.ar/' target="_blank">champion of Samsung Solve For Tomorrow 2023</a></span> with the CitySensor project.</p>) : (<p>Soy un <span>estudiante</span> de 18 años y desarrollador full stack recibido como Técnico en Computación en la escuela secundaria técnica. Apasionado por la informática, con experiencia en diversos proyectos e iniciando mi carrera universitaria para Lic. en Tecnología Digital en la Universidad Torcuato Di Tella, buscando constantemente <span>seguir adquiriendo conocimientos</span> y contribuir al progreso tecnológico. Además, soy el <span><a href='https://solvefortomorrow.com.ar/'>campeón de Samsung Solve For Tomorrow 2023</a></span> con el proyecto CitySensor.</p>)}
        </div>
        <div className="boxes_div">
          <div className="yearsDevelop boxes">
              <h3><span>+2</span><br />{ language == "en" ? "years in web development" : "años en desarrollo web"}</h3>
          </div>
          <div className="projectsDevelop boxes">
            <h3><span>+5</span><br />{ language == "en" ? "projects developed" : "proyectos desarrollados"}</h3>
          </div>
        </div>
    </div>
  );
};

export default AboutMe;

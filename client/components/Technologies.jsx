import React from "react";
import "./Styles/SkillsStyle.css"
import Skills from './Skills'
import { useLanguage } from '../context/LanguageContext';
const Technologies = () => {
    
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="skillsContainer" id='skillsContainer'>
        { language == "en" ? (<h2><span className='me'>TECH</span>NOLOGIES</h2>) : (<h2><span className='me'>TECNO</span>LOGÍAS</h2>)}
        <h3>Front-end:</h3>
        <div className="skills">
          <Skills image="assets/html-icon.webp"name="HTML"/>
          <Skills image="assets/css.png" name="CSS"/>
          <Skills image="assets/react-logo-A60AB5e1_brandlogos.net.svg"name="ReactJS"/>
          <Skills image="assets/js.png"name="JavaScript"/>
        </div>
        <h3>Back-end: </h3>
        <div className="skills">
          <Skills image="assets/django-logo.png"name="Django"/>
          <Skills image="assets/java.png" name="Java"/>
          <Skills image="/assets/pngwing.com (5).png"name="NodeJS"/>
          <Skills image="/assets/arduino-logo-1.png" name="Arduino"/>
        </div>
        <h3>   {language == "en" ? "Databases:" : "Bases de datos:" } </h3>
        <div className="skills">
          <Skills image="/assets/mysql.png" name="MySQL"/>
          <Skills image="/assets/mongo.png"name="MongoDB"/>
        </div>
      </div>
  );
};

export default Technologies;

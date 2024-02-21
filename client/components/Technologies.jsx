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
          <Skills image="assets/html-icon.webp"name="HTML" color="rgb(228,77,38)"/>
          <Skills image="assets/css.png" name="CSS" color="#2465f1"/>
          <Skills image="assets/react-logo-A60AB5e1_brandlogos.net.svg"name="ReactJS" color="rgb(97,218,251)"/>
          <Skills image="assets/js.png"name="JavaScript" color="rgb(240,220,78)"/>
        </div>
        <h3>Back-end: </h3>
        <div className="skills">
          <Skills image="assets/django-logo.png"name="Django" color="rgb(38,170,120)"/>
          <Skills image="assets/java.png" name="Java" color="rgb(191,44,54)"/>
          <Skills image="/assets/pngwing.com (5).png"name="NodeJS" color="rgb(140,200,75)"/>
          <Skills image="/assets/arduino-logo-1.webp" name="Arduino" color="#0f979c"/>
        </div>
        <h3>   {language == "en" ? "Databases:" : "Bases de datos:" } </h3>
        <div className="skills">
          <Skills image="/assets/mysql.png" name="MySQL" color="rgb(214,130,49)"/>
          <Skills image="/assets/mongo.png"name="MongoDB" color="rgb(73,157,74)"/>
        </div>
      </div>
  );
};

export default Technologies;

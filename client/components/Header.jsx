import React from "react";
import "./Styles/HeaderStyle.css"
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";



const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const { darkMode, changeMode } = useDarkMode()

  const handleLanguageChange = () => {
    changeLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header>
      <ul>
        <li className="nav_li first">
          <a href="../#container" >
            <div className="icon-container">
              <i className='bx bx-home'></i>
              <span>{language == "en" ? "Home" : "Inicio" }</span>
            </div>
          </a>
        </li>
        <li className="nav_li">
          <a href="../#container2">
            <div className="icon-container">
              <i className='bx bx-user-circle'></i>
              <span>{language == "en" ? "About" : "Sobre" }</span>
            </div>
          </a>
        </li>
        <li className="nav_li">
          <a href="../#skillsContainer">
            <div className="icon-container">
              <i className='bx bx-star'></i>
              <span>{language == "en" ? "Skills" : "Habilidades" }</span>
            </div>
          </a>
        </li>
        <li className="nav_li">
          <a href="../#container3" >
            <div className="icon-container">
              <i className='bx bx-folder-open'></i>
              <span>{language == "en" ? "Projects" : "Proyectos" }</span>
            </div>
          </a>
        </li>
      
        <li className="nav_li">
          <a href="../#EducationContainer">
            <div className="icon-container">
             <i className='bx bxs-graduation'></i>
              <span>{language == "en" ? "Education" : "Educación" }</span>
            </div>
          </a>
        </li>
        <li className="nav_li">
          <a href="../#contact_container" >
            <div className="icon-container">
              <i className='bx bx-message-dots'></i>
              <span>{language == "en" ? "Contact" : "Contacto" }</span>
            </div>
          </a>
        </li>
        <li className={`darkModeNav ${!darkMode ? 'darkMode' : 'lightMode'}`} onClick={changeMode} >    
              {!darkMode ? (<i className='bx bxs-moon'></i>) : (<i className='bx bxs-sun' ></i>)} 
        </li>
        <li className="languageNav" onClick={handleLanguageChange}>    
              {language == "en" ? ( <img src="../public/assets/us.svg" alt=""  />) : (<img src="../public/assets/ar.svg" alt="" />)} 
        </li>
      </ul>
      
    </header>
  );
};

export default Header;

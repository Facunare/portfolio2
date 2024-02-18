import React from "react";
import { useEffect, useRef, useState} from 'react'
import '../public/App.css'
import Typed from 'typed.js';
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import Education from '../components/Education'
import fotoGrande from '/assets/Samsung_Adelanto-35-PhotoRoom.png-PhotoRoom-W-1R6aMnb-transformed.png'
import fotoChica from '/assets/WhatsApp Image 2023-12-22 at 10.58.03 PM (3).jpeg'
import pdf from '/assets/CV - Facundo Arechaga (13).pdf'
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from "../context/DarkModeContext";
import '../public/darkMode.css'

const Portfolio = ({image}) => {
    const { language, changeLanguage } = useLanguage();
    const { darkMode, changeMode } = useDarkMode()
    const handleClick = () =>{
      var link = document.createElement('a');
      link.href = pdf; 
      link.download = 'FacundoArechagaCV.pdf';
      link.click();
      document.body.removeChild(link);
    }
    window.onload = function() {
      var hash = window.location.hash;
      if (hash && document.querySelector(hash)) {
          document.querySelector(hash).scrollIntoView({
              behavior: 'smooth'
          });
      }
  };
  
    const el = React.useRef(null);
    let texto = []
    useEffect(() => {
      let typedInstance;
  
   
  
      if (language === "en") {
        texto = ['<i>a Full-stack developer</i>.', '<i>Argentinian</i>.', '<i>18 years old</i>.', '<i>the Samsung SFT 2023 winner</i>.'];
      } else {
        texto = ['<i>un desarrollador Full-Stack</i>.', '<i>Argentino</i>.', '<i>el ganador de Samsung SFT</i>.'];
      }
  
      typedInstance = new Typed(el.current, {
        strings: texto,
        typeSpeed: 100,
        backSpeed: 100,
        onComplete: (self) => {
          setTimeout(() => {
            self.reset();
          }, 1000);
        },
      });
      return () => {
        if (typedInstance) {
          typedInstance.destroy();
        }
      };
    }, [language]);
  return (
    <div className={`back ${!darkMode ? "dark" : "white"}`} id={`${!darkMode ? "" : "multiimage"}`}>
      <div className="container" id='container'>
        <Header/>
        <div className="content" id={`${!darkMode ? "" : "header_image"}`}>
          <div className="fotoyDesc">
            <img className='fotoChica' src={fotoChica} alt="Facundo Arechaga" />
            <div>
              <div>  

                  <h2 className="greetings">{language == "en" ? "Hi! My name is" : "¡Hola! Mi nombre es" }</h2>
                  <h1 className='name'>Facundo Arechaga</h1>
                
                <p className='typed' >{language == "en" ? "I'm " : "Soy " }<span  className='typed' ref={el} /></p>
              </div>
              <div>

                <a href='#container2' className='aboutMe_a'><span className='aboutMeButton'>{language == "en" ? "ABOUT ME" : "SOBRE MI" }</span></a>
                <button id="downloadButton" onClick={handleClick}><span className='viewCvButton'>{language == "en" ? "DOWNLOAD CV" : "DESCARGAR CV" }</span></button>
              </div>
            </div>
          </div>
          <div className="media_header">
            <a href="https://www.linkedin.com/in/facundo-arechaga-a0a525235/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/Facunare" target="_blank" ><i className='bx bxl-github' ></i></a>
            <a href="https://www.instagram.com/facu.arechaga_/" target="_blank" > <i className='bx bxl-instagram'></i></a>
            <a href="https://www.youtube.com/channel/UCcCoUe7ajmU6CpiLkm54ccA" target="_blank"><i className='bx bxl-youtube' ></i></a>
          </div>
        </div>

        <div className='yoDiv'>
          <div className="vineta">

            <p className="globo iv yellow">
            {language == "en" ? "If you liked my work..." : "Si te gustó mi trabajo..." }<br />
              <a href="#contact_container">{language == "en" ? "CONTACT ME" : "CONTACTAME" }</a>
            </p> 
          </div>
          <img className='yo' src={fotoGrande} alt="Facundo Arechaga" />
        </div>
      </div>
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Education/>
      <Contact/>
      </div>
  );
};

export default Portfolio;

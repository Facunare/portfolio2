import React, { useEffect, useState } from "react";
import useFetch from "../custom_hooks/useFetch";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";
import './Styles/EducationStyle.css'

const Education = () => {
    const { language, changeLanguage } = useLanguage();
    const [data, fetchData] = useFetch([]);
    const { darkMode, changeMode } = useDarkMode()
    const [images, setImages] = useState([]);
    
    useEffect(()=>{
        const fotos = document.querySelectorAll('.foto')
        const modalFoto = document.querySelector('.modalFoto')
        const modalFotoFoto = document.querySelector('.modalFoto img')
        const cerrarModales = document.querySelectorAll('.modal_close')
      
    
        fotos.forEach(foto=>{
        
            foto.addEventListener('click', (e)=>{
                e.preventDefault()  
                modalFotoFoto.src = foto.src
                modalFoto.classList.add('modal--show')
            })
        })
        
        for(let cerrarModal of cerrarModales){
        
            cerrarModal.addEventListener('click', (e)=>{
                e.preventDefault()
                modalFoto.classList.remove('modal--show');
            })
        }
    })

    useEffect(() => {
      allImages();
    }, []);
  
    useEffect(() => {
      setImages(data);
    }, [data]);
  
    const allImages = () => fetchData('/gallery.json');
  
    const handleButtonImages = (id) => {
      const filteredImages = data.filter(image => image.category === id);
      setImages(filteredImages);
    }


    
  

    return (
    <div className="EducationContainer" id="EducationContainer">
        
            
        { language == "en" ? (<h2>ACADEMIC <span className='datos'>DATA</span></h2>) : (<h2><span className='datos'>DATOS</span> ACADEMICOS</h2>)}
        <div className="divison">
 
            <ol className={`relative border-s ${darkMode ? "border-gray-500" : ""}`}>           
            <div>

                    <li onClick={() => handleButtonImages("SFT")} className="ms-6 mb-10">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <button onClick={() => handleButtonImages("SFT")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Samsung Solve For Tomorrow 2023</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{language == "en" ? "Winner with the CitySensor project" : "Ganador con el proyecto CitySensor" }</p>
                    </li>
                    <li onClick={() => handleButtonImages("CBC")} className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <button onClick={() => handleButtonImages("CBC")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language == "en" ? "Complete CBC for Computer Science Graduate" : "CBC completo para Lic. Ciencias de la Computación" }</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Universidad de Buenos Aires (UBA)</p>
                    </li>
                    <li onClick={() => handleButtonImages("UDLC")} className="ms-6 mb-10">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <button onClick={() => handleButtonImages("UDLC")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language == "en" ? "Data-analytics course with Power BI Course" : "Curso de Data Analytics con Power BI" }</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Universidad de la Ciudad </p>
                    </li>
            </div>
                <div>

                    <li onClick={() => handleButtonImages("GT")} className="ms-6 mb-10">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <button onClick={() => handleButtonImages("GT")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language == "en" ? "Full-Stack Junior Web Development Course" : "Curso de Desarrollo web Full-Stack Jr." }</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Generacion T</p>
                    </li>
                    <li onClick={() => handleButtonImages("AP")} className="ms-6 mb-10">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <button onClick={() => handleButtonImages("AP")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language == "en" ? "GCBA Web Development and Mobile Applications Course" : "Curso de desarrollo web y aplicaciones moviles GCBA" }</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2020 - 2022</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Aprende Programando - {language == "en" ? "Web development 1" : "Desarrollo web 1" }</p>
                    </li>
                    <li onClick={() => handleButtonImages("ET36")} className="ms-6 ">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <button onClick={() => handleButtonImages("ET36")}><svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg></button>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{language == "en" ? "Computer Technician" : "Técnico en Computación" }</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">2018-2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{language == "en" ? "High School degree - Technical School 36 D.E. 15 - Alte. Brown computer oriented." : "Título secundario - Escuela Técnica 36 D.E. 15 - Alte. Brown orientada en computación" }</p>
                    </li>
                </div>
            </ol>
            <div className="gallery">
                {images.length > 0 ? (
                    images.map((foto, index) => (
                        <div key={index} className="gallery_div"> {/* Adding key here */}
                            {foto.type === "image" ? (
                                <img src={`/assets/gallery/${foto.url}`} alt={`Facundo Arechaga - Image - ${foto.category === "SFT" ? "Samsung Solve For Tomorrow - CitySensor" : ""}`} className="foto" />
                            ) : (
                                <video controls>
                                    <source src={`/assets/gallery/${foto.url}`} type="video/mp4" />
                                </video>
                            )}
                            <section className="modal modalFoto">
                                <div className="modal_container_foto">
                                    <button href="#" className="modal_close"><i className='bx bx-x'></i></button>
                                    <img src="" alt={`Facundo Arechaga - Image - ${foto.category === "SFT" ? "Samsung Solve For Tomorrow - CitySensor" : ""}`} />
                                </div>
                            </section>
                        </div>
                    ))
                ) : (
                    <p>{language === "en" ? "No images available" : "No hay imágenes disponibles"}</p>
                )}
            </div>

        </div>
    </div>
  );
};

export default Education;

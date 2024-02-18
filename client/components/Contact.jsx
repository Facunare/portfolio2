import React, { useState, useEffect } from "react";
import "./Styles/ContactStyle.css"
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  const { language, changeLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const validateForm = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let hasError = false;
  
    if (name.trim() === "") {
      hasError = true;
    }
  
    if (email.trim() === "") {
      hasError = true;
    } else if (!emailRegex.test(email)) {
      hasError = true;
    }
  
    if (message.trim() === "") {
      hasError = true;
    }

    setError(hasError);
    setSuccess(!hasError);
  
    if (hasError) {

      setTimeout(()=>{
        setError(null);
        setSuccess(null);
      }, 3000)
    } else {
        await fetch('https://facundoarechaga1.vercel.app/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: "Acme <onboarding@resend.dev>",
            to: ["arechaga.facundoet36@gmail.com"],
            subject: formData.name + " - contacto desde el Portfolio",
            html: "Mensaje: " + formData.message,
          }),
        });
      setTimeout(()=>{
        setError(null);
        setSuccess(null); 
      }, 3000)
    }
  };


  return (
    <footer className="contact_container" id="contact_container">
      <div className="contact_container_div">

        <div className="firstDiv">
          <div className="contact_me">
            {language == "en" ? (<h2>CONTACT <span>ME</span></h2>) : (<h2>CONTACTA<span>ME</span></h2>)}
            <p>{language == "en" ? "Feel free to contact me any time. I will get back to you as soon as I can!" : "Sentite libre de contactarme cuando sea. ¡Me comunicaré contigo cuanto antes!" }</p>
          </div>
          <h3>{language == "en" ? "E-mail" : "Correo electrónico" }</h3>
          <p className="myMail">arechaga.facundoet36@gmail.com</p>
          <h3>{language == "en" ? "Phone" : "Celular" }</h3>
          <p>+54 11 5769 1635</p>
          <div className="media">
            <a href="https://www.linkedin.com/in/facundo-arechaga-a0a525235/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://github.com/Facunare" target="_blank" ><i className='bx bxl-github' ></i></a>
              <a href="https://www.instagram.com/facu.arechaga_/" target="_blank" > <i className='bx bxl-instagram'></i></a>
              <a href="https://www.youtube.com/channel/UCcCoUe7ajmU6CpiLkm54ccA" target="_blank"><i className='bx bxl-youtube' ></i></a>
          </div>
        </div>
        <form id="contactForm" method="POST"> 
          <div className="secondDiv">
            <div className="formGroup">

              <input type="text" value={formData.name}
                onChange={handleChange} name="name" id="name" placeholder={language == "en" ? "Name..." : "Nombre..." } className="contact_input" required />
            </div>

            <div className="formGroup">

              <input type="email" value={formData.email}
                onChange={handleChange} name="email" id="email" placeholder={language == "en" ? "Email..." : "Correo..." } className="contact_input" required />
            </div>
          </div>

          <textarea name="message" value={formData.message}
                onChange={handleChange} id="message" cols="30" rows="5" placeholder={language == "en" ? "Message..." : "Mensaje..." } required></textarea>

          { error !== null && error && (
              <div id="messageError" className="error">
                <i className="bx bx-error-circle"></i>
                {language == "en"
                  ? "One or more data is incorrect or missing!"
                  : "Uno o más datos son incorrectos o faltantes!"}
              </div>
            )}
            {success !== null && success && (
              <div id="messageSuccess" className="success">
                <i className="bx bxs-message-alt-check"></i>
                {language == "en"
                  ? "Email sent successfully!"
                  : "Correo enviado exitosamente!"}
              </div>
            )}
          <button onClick={validateForm}><i className='bx bx-send'></i></button>
        </form>
      </div>
      <h6>{language == "en" ? `Built by Facundo Arechaga with  `: "Hecho por Facundo Arechaga con  "}<i className='bx bxs-heart'></i></h6>
    </footer>
  );
};

export default Contact;


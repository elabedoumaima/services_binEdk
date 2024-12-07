import React, { useState } from 'react';
import './contact.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const [nomPrenom, setNomprenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [stare, setStare] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value into';
    if (nomPrenom === null || nomPrenom === '') {
      isproceed = false;
      errormessage += " Nom & Prenom ";
    }
    if (email === null || email === '') {
      isproceed = false;
      errormessage += " Email ";
    }
    if (!isproceed) {
      alert(errormessage);
    } else {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

      } else {
        isproceed = false;
        alert('Please enter the valid email');
      }
    }
    return isproceed;
  };

  const sendEmail =async (e) => {
    e.preventDefault();
    if (IsValidate()) {
      const formData = {
        nomPrenom: nomPrenom,
        email: email,
        message: message,
        stare: stare,
      };
      try {
        const response = await axios.post('http://localhost:8000/afficherCommentaire', formData);
        if (response.data.status === 200) {
          alert(response.data.message);
          setNom('');
          setEmail('');
          setMessage('');
          setStare('');
          navigate('/home');
        }
      }
      catch (error) {
        alert('Échec :' + error.message);
      }
    }
  };

  return (
    <div className='contactForm' id='contact'>
      <form onSubmit={sendEmail}>
        <h1 className='titleContact'>Se Connecter Avec Nous</h1>
        <div className="input_Contact">
          <i className='fas fa-user icons'></i>
          <input placeholder='Nom & Prenom' value={nomPrenom} onChange={(e) => setNomprenom(e.target.value)} type="text" name='user_name' required />
        </div>
        <div className="input_Contact">
          <i className='fas fa-envelope icons'></i>
          <input placeholder=' Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" name='user_email' required />
        </div>
        <div className="input_Contact">
          <i className='fas fa-comments icons'></i>
          <textarea placeholder='Votre Message' value={message} onChange={(e) => setMessage(e.target.value)} id='message' name='message' rows={4} required />
        </div>
        <div className='experienceTop'>
      <div className="containerEX">
        <div className={isEditing ? "star-widget" : "star-widget hidden"}>
          <input type="radio" name="rate" id="rate-5" checked={stare === "5"} onClick={() => setStare("5")} />
          <label htmlFor="rate-5" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4" checked={stare === "4"} onClick={() => setStare("4")} />
          <label htmlFor="rate-4" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3" checked={stare === "3"} onClick={() => setStare("3")} />
          <label htmlFor="rate-3" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2" checked={stare === "2"} onClick={() => setStare("2")} />
          <label htmlFor="rate-2" className="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1" checked={stare === "1"} onClick={() => setStare("1")} />
          <label htmlFor="rate-1" className="fas fa-star"></label>
          <form onSubmit={(e)=>e.preventDefault()}>
          <header></header>
          </form>
        </div>
        </div>
        </div>
        <button className='buttonSubmit' type='submit'><i className='fas fa-paper-plane icons-button'></i>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

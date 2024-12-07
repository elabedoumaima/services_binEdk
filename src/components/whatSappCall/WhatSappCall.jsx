import React, { useState } from 'react';
import './whattsappCall.css'
import axios from 'axios';

const WhatsAppCall = () => {
  const [formData, setFormData] = useState({
    nom: '',
    ville: 'Laâyoune',
    tele: '',
    email: '',
    description: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
  }

  const sendWhatsApp = async() => {
    const { nom, ville, telephone, email, description } = formData;
    const phoneNumber = "+774463661";
    const url = "https://wa.me/" + phoneNumber + "?text=" +
      "Nom : " + nom + "%0a" +
      "Ville : " + ville + "%0a" +
      "Telephone: " + telephone + "%0a" +
      "Email : " + email + "%0a" +
      "Message : " + description + "%0a" +
      "%0a%0a";
      await axios("http://localhost:8000/afficherWhatsappClients", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (!nom.trim()) {
      alert("Le champ Nom & prénom est requis. Veuillez le remplir.");
      return;
    }
    if (telephone.length !== 10) {
      alert("Le numéro de téléphone doit contenir 10 chiffres. Veuillez le corriger.");
      return;
    }
    if (!validateEmail(email)) {
      alert("L'adresse email n'est pas valide. Veuillez la corriger.");
      return;
    }
    if (!description.trim()) {
      alert("Le champ Description est requis. Veuillez le remplir.");
      return;
    }
    window.open(url, '_blank').focus();
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div id="divFormCall" className="div-block-234" style={{ display: 'block' }}>
      <div className="div-block-269">
        <div className="div-block-235" style={{ backgroundColor: 'rgb(132, 161, 176)' }}>
          <img style={{ marginRight: '18px' }} src="assistance.png" loading="lazy" width="78" alt="" className="image-112" />
          <div className="text-block-163">Discutez avec un agent</div>
          <div id="btnFormCallClose" className="div-block-237" >
            <img src="arrow-down-sign-to-navigate-1.png" loading="lazy" width="11" alt=""  onClick={toggleFormVisibility} />
          </div>
        </div>
        {isFormVisible && (
        <div className="div-block-247">
          <div className="form-block-3 w-form">
            <form onSubmit={handeleSubmit} id="formCallMe" className="form-4" aria-label="Formulaire de rappel">
              <label  className="field-label">Nom &amp; prénom</label>
              <input type="text" className="text-field-6 w-input" name="nom" placeholder="Entrer votre nom" id="nom" value={formData.nom} onChange={handleChange} required />
              <label  className="field-label">Ville</label>
              <select id="ville" name="ville" className="text-field-6 w-select" value={formData.ville} onChange={handleChange} required>
                <option value="Laâyoune">Paris</option>
                <option value="Boujdour">Marseille</option>
                <option value="Es-Semara">Lyon</option>
              </select>
              <label  className="field-label">Tél.</label>
              <input type="text" className="text-field-6 w-input"  name="telephone" placeholder="Entrer votre téléphone" id="telephone" value={formData.telephone} onChange={handleChange} required />

              <label htmlFor="email" className="field-label">Email</label>
              <input type="text" className="text-field-6 w-input" name="email" placeholder="Entrer votre adresse email" id="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="description" className="field-label">Description</label>
              <textarea style={{ resize: 'none', height: '100px' }} className="text-field-6 w-input" name="description" placeholder="Décrivez votre problème" id="message" value={formData.description} onChange={handleChange} required></textarea>

              <div className="div-block-236">
                <button type="button" onClick={sendWhatsApp} id="btnCallMe" style={{ backgroundColor: 'rgb(132, 161, 176)', color: 'white', height: '40px', fontSize: '13px' }} className="button-20 w-button">
                  <i className='fab fa-whatsapp icon'></i>
                  <h6>Discutez avec moi !</h6>
                </button>
              </div>
            </form>
          </div>
        </div>
         )}
      </div>
    </div>
  );
};

export default WhatsAppCall;

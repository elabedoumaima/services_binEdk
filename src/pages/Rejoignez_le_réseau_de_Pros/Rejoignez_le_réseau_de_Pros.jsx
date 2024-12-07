import React, { useState } from 'react';
import './rejoignez_le_réseau_de_Pros.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/heading/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';

function Rejoignez_le_réseau_de_Pros() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [cine, setCine] = useState("");
  const [ville, setVille] = useState("Sélectionnez ...");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [preuves, setPreuves] = useState("");
  const [demander, setDemander] = useState(" ");
  const navigate = useNavigate();

  const IsValidate = () => {
    let isProceed = true;
    let errorMessage = 'Veuillez remplir les champs suivants :';

    if (!nom.trim() || !prenom.trim()) {
      isProceed = false;
      errorMessage += " Nom & Prénom,";
    }
    if (!date.trim()) {
      isProceed = false;
      errorMessage += " Date De Naissance,";
    }
    if (!cine.trim()) {
      isProceed = false;
      errorMessage += " Numéro D’identification National,";
    }
    if (!demander.trim()) {
      isProceed = false;
      errorMessage += " demander,";
    }
    if (!ville === "Sélectionnez ..") {
      isProceed = false;
      errorMessage += " Ville,";
    }
    if (!telephone.trim()) {
      isProceed = false;
      errorMessage += " Téléphone,";
    }
    if (!email.trim()) {
      isProceed = false;
      errorMessage += " Email,";
    }
    if (!specialisation.trim()) {
      isProceed = false;
      errorMessage += " Spécialisation,";
    }
    if (!preuves.trim()) {
      isProceed = false;
      errorMessage += " Preuves obtenues,";
    }
    if (!isProceed) {
      alert(errorMessage.slice(0, -1));
    } else {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      } else {
        isProceed = false;
        alert('Veuillez entrer une adresse e-mail valide.');
      }
    }
    return isProceed;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (IsValidate()) {
      const formData = {
        nom: nom,
        prenom: prenom,
        date: date,
        ville: ville,
        cine: cine,
        email: email,
        telephone: telephone,
        specialisation: specialisation,
        preuves: preuves,
        demander: demander,
      };
      try {
        const response = await axios.post('http://localhost:8000/afficherEmployeSpecialise', formData);
        if (response.data.status === 200) {
          alert(response.data.message);
          setNom('');
          setPrenom('');
          setDate('');
          setCine('');
          setVille('');
          setTelephone('');
          setEmail('');
          setSpecialisation('');
          setPreuves('');
          setDemander('');
          navigate('/');
        }
      }
      catch (error) {
        alert('Échec : ' + error.message);
      }
    }
  };
  return (
    <div className='RejoignezTopPage'>
      <Header />
      <div className='RejoignezTop'>
        <div className='RejoignezText'>
          <h1>Contactez-nous</h1>
          <p className="paragraph-27">Vous êtes <strong>client chez nous ou intéressé par nos services ?</strong> <br />Un <strong>artisan indépendant</strong> qui souhaite rejoindre nos équipes ou <strong>un candidat à la recherche d’un Job </strong>?<br />Laissez-nous un message, nous vous contacterons !</p>
        </div>
        <form onSubmit={handleSubmit} className='RejoignezButtom'>
          <label>Nom</label><br />
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required /><br />
          <label>Prénom</label><br />
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required /><br />
          <label>Date De Naissance</label><br />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />
          <label>Numéro D’identification National</label><br />
          <input type="text" value={cine} onChange={(e) => setCine(e.target.value)} required /><br />
          <label>Ville</label><br />
          <select value={ville} onChange={(e) => setVille(e.target.value)}>
            <option value="Sélectionnez ..">Sélectionnez ..</option>
            <option value="Laâyoune">Paris </option>
            <option value="Boujdour">Marseille</option>
            <option value="Es-Semara">Lyon</option>
          </select><br />
          <label >Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Téléphone</label><br />
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required /><br />
          <label >Spécialisation</label><br />
          <input type="text" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} /><br />
          <label >Preuves obtenues</label><br />
          <input type="text" value={preuves} onChange={(e) => setPreuves(e.target.value)} /><br />
          <label >Objet de la demande</label><br />
          <textarea placeholder='Exprimez votre demande' rows="8" cols="50" value={demander} onChange={(e) => setDemander(e.target.value)} /> <br />
          <button type='submit'>Envoyer</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Rejoignez_le_réseau_de_Pros;

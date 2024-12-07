import React from 'react';
import './services.css'
import { Link } from 'react-router-dom';
import Header from '../../components/common/heading/Header';
import Footer from '../../components/footer/Footer';
function Services() {
  return (
     <div className='servicesTopPage'>
      <Header/>
    <div className='servicesTop'>
       
      <h1>Tous les services</h1>
      <div className='servicesDesplay'>
        <img className='imageS'  src="Img4.png" alt="" />
        <img className='iconsArrow'  src="icons8-arrow-64.png" alt="" />
        <div className='servicesPartie'>
        <Link to={'/depannage'}><h4>Dépannage et réparation</h4></Link>
        <p>Un problème de plomberie, d'électricité, de serrurerie… ? Une fuite d’eau, un chauffe-eau à remplacer... Pour toutes les prestations de dépannage ...</p>
        </div>
      </div>
      <div className='servicesDesplay'>
        <img className='imageS'  src="Img2.png" alt="" />
        <img className='iconsArrow'  src="icons8-arrow-64.png" alt="" />
      <div className='servicesPartie'>
        <Link to={'/petits_travaux'}><h4>Petits travaux</h4></Link>
        <p>Des envies de bricolage ou des petits travaux d’embellissement de vos espaces intérieurs et extérieurs (peinture, pose de carrelage, nouvelle installation électrique, parquet ou stores vénitiens ...)</p>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Services;

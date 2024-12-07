import React from 'react';
import './servicesC.css';
import Img1 from '../../../src/image/Img1.png'
import Img2 from '../../../src/image/Img2.png'
import Img3 from '../../../src/image/Img3.png'
import Img4 from '../../../src/image/Img4.png'
import { Link } from 'react-router-dom';
const ServicesC = () => {
    return (
        <div className="servicesTopComponent">
            <h1>Tous les services</h1>
            <div className="ServicesComponentCom">
                <div className="serviceCom">
                    <img src={Img4} alt="" />
                    <h3>DÉPANNAGE & RÉPARATION</h3>

                    <p>Un problème de plomberie, d'électricité, de serrurerie…? Chez bin_edk, nous avons la solution!Notre service de dépannage est assuré.Demandez votre dépannage en ligne ou par téléphone .</p>

                    <Link to={'/depannage'}><button className='ButtonService'>Décrivez votre besoin</button></Link>
                </div>
                <div className="serviceCom">
                    <img src={Img2} alt="" />
                    <h3>PETITS TRAVAUX</h3>

                    <p>Monter un meuble ? Accrocher votre miroir sur un mur carrelé, poser du carrelage ou repeindre un mur?Vous pouvez faire appel à nos Pros des petits travaux qui seront là pour vous proposer </p>

                    <Link to={'/petits_travaux'}><button className='ButtonService'>Décrivez votre besoin</button></Link>
                </div>
                <div className="serviceCom">
                    <img src={Img1} alt="" />
                    <h3>NETTOYAGE</h3>

                    <p>Nettoyage de vitres,nettoyage de bureaux,nettoyage de restaurants,nettoyage d'hôtels à Riyad,nettoyage de bâtiments,de logements(nettoyage d’appartements..)</p>

                    <Link to={'/nettoyage'}><button className='ButtonService'>Décrivez votre besoin</button></Link>
                </div>
                <div className="serviceCom">
                    <img src={Img3} alt="" />
                    <h3>SECURITE</h3>

                    <p>Problème de sécurité?Chez bin_edk,nous avons la solution!Notre service de sécurité est fourni. Demandez votre intervention en ligne ou par téléphone La sécurité privée est attribuée dans les 20 minutes .</p>

                    <Link to={'/securite'}><button className='ButtonService'>Décrivez votre besoin</button></Link>

                </div>
            </div>
        </div>
    )
}

export default ServicesC;
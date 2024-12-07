import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'> 
    <div className="container-footer">
      <div className="row-footer">
        <div className="footer-col">
          <h4><em>Entreprise</em></h4>
          <ul>
            <li><a href="/environ">Environ</a></li>
            <li><a href="/servicesPage">Services</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4><em>Obtenir de l’aide</em></h4>
          <ul>
            <li><a href="#accordion">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#bin_edk_clients">bin_edk pour clients</a></li>
            <li><a href="#bin_edk_ouvrier">bin_edk pour ouvrier</a></li>
            <li><a href="/">Retourne</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4><em>A propos</em></h4>
          <ul>
            <li><a href="/charte_qualité">Charte Qualité</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4><em>Recrutement</em></h4>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="/afficherEmployeSpecialise">Rejoignez le réseau de Pros</a></li>
            <li><a href="/afficherEmployeSpecialise">Travaillez chez Bin_edk</a></li>
            <div className='social-links'>
            <a href="https://www.facebook.com/profile.php?id=61555831454443&mibextid=rS40aB7S9Ucbxw6v"><i className='fab fa-facebook-f'></i></a>
            <a href="https://www.instagram.com/binedk2024?utm_source=qr&igsh=dHg1Mzg4MHNzc3A0"><i className='fab fa-instagram'></i></a>
            <a href="https://twitter.com/bin_edk"><i className='fab fa-twitter'></i></a>
            </div>
          </ul>
        </div>
      </div>
    </div>
      

    </div>
  )
}
export default Footer

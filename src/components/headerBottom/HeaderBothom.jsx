import React from 'react'
import './headerBottom.css'
import { Link } from 'react-router-dom'
function HeaderBothom() {
  return (
    <div className='registerHeaderBothom'>
      <div className='contactHeaderBothom'>
        <a href="#contact">
        <img src="contact.png" alt="" />
        <p>Si vous avez besoin d’une enquête,contactez-nous ici.</p>
        </a>
      </div>
      <div className='contactHeaderBothom'>
        <Link to={'/register'}>
        <img src="login.png" alt="" />
        <p>Si vous avez besoin de nous rejoindre,cliquez ici.</p>
        </Link>
      </div>
      <div className='contactHeaderBothom'>
        <Link to={'/login'}>
        <img src="login.png" alt="" />
        <p>Si vous êtes l’un de nos clients, cliquez ici.</p>
        </Link>
      </div>
      </div>
  )
}

export default HeaderBothom
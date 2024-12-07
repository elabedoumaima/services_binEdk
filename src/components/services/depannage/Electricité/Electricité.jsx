import React from 'react'
import Header from '../../../common/heading/Header'
import Footer from '../../../footer/Footer'
import './Electricité.css'
import { Link } from 'react-router-dom'
function Electricité() {
  return (
    <div className='electricitéTop_Components'>
      <Header />
      <div className='electricitéTop'>
        <h1><em>Electricité</em></h1>
        <p>Où se situe le problème ?</p>
        <hr />
        <div className='electricitéSecond'>
          <Link className='electricitélinkTop' to={'/electricitéIncre'}>Tableau électrique</Link> <br />
          <Link className='electricitélinkTop' to={'/electricitéIncre2'}>Prises,interrupteurs ou prises Internet</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Electricité
import React from 'react'
import Header from '../../../common/heading/Header'
import Footer from '../../../footer/Footer'
import './Plomberie.css'
import { Link } from 'react-router-dom'
function Plomberie() {
  return (
    <div className='PlomberieTop_Components'>
    <Header/>
  <div className='PlomberieTop'>
      <h1><em>Plomberie</em></h1>
      <p>Où se situe le problème ?</p>
      <hr />
      <div className='PlomberieSecond'>
          <Link className='PlomberielinkTop' to={'/PlomberieLink'}>Plomberie</Link><br />
          <Link className='PlomberielinkTop' to={'/Extracteurdairdesalledebain'}>Extracteur d'air de salle de bain</Link>
      </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Plomberie
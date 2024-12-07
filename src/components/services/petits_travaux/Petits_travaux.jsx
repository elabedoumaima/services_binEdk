import React from 'react'
import './petits_travaux.css'
import { Link } from 'react-router-dom'
import Header from '../../common/heading/Header';
import Footer from '../../footer/Footer';
function Petits_travaux() {
  return (
    <div className='petits_travaux_top_Components' >
      <Header/>
      <div className='petits_travaux_top' >
      <h3><em>Petits travaux</em></h3>
      <div className='petits_travaux_secend'>
        <Link  style={{marginBottom:'10px'}} className='linkTopPetits' to={'/bricolage'}>Bricolage</Link>
        <Link  style={{marginBottom:'10px'}} className='linkTopPetits' to={'/carrelage'}>Carrelage</Link>
        <Link  style={{marginBottom:'10px'}} className='linkTopPetits' to={'/climatisation-ou-ventilation'} >Jardinage</Link>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Petits_travaux
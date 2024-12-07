import React from 'react'
import './depannage.css'
import { Link } from 'react-router-dom'
import Header from '../../common/heading/Header'
import Footer from '../../footer/Footer'
function Depannage() {
  return (
    <div className='depannageTop_Components'>
      <Header/>
    <div className='depannageTop'>
        <h3><em>Dépannage et réparation</em></h3>
        <div className='depannageSecond'>
            <Link style={{marginBottom:'10px'}} className='linkTop' to={'/climatisation'}>Climatisation</Link> 
            <Link style={{marginBottom:'10px'}} className='linkTop' to={'/electricité'}>Electricité</Link>
            <Link style={{marginBottom:'10px'}} className='linkTop' to={'/plomberie'} >Plomberie</Link>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Depannage
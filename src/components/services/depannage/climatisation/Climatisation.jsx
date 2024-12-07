import React from 'react'
import './climatisation.css'
import Header from '../../../common/heading/Header'
import Footer from '../../../footer/Footer'
import { Link } from 'react-router-dom'
function Climatisation() {
  return (
    <div className='climatisationTop_Components'>
      <Header/>
    <div className='climatisationTop'>
        <h1><em>Climatisation</em></h1>
        <p>Où se situe le problème ?</p>
        <hr />
        <div className='climatisationSecond'>
            <Link style={{width:'200px'}} className='climatisationlinkTop' to={'/climatisationLink'}>Climatisation</Link> <br />
            <Link className='climatisationlinkTop' to={'/Extracteurdairdesalledebain'}>Extracteur d'air de salle de bain</Link>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Climatisation
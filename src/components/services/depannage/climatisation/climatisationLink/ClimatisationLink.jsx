import React from 'react'
import Header from '../../../../common/heading/Header'
import Footer from '../../../../footer/Footer'
import { Link } from 'react-router-dom'
import './climatisationLink.css'
function ClimatisationLink() {
  return (
    <div>
      <Header/>
      <div className='ClimatisationLink1'>
        <h1><em>Climatisation</em></h1>
        <p>Quelle est la nature du problème ?</p>
        <hr />
        <div className='ClimatisationLinkSecond'>
            <Link className='linkTopcliClimatisation' to={'/climatisationIncre'}>Ca ne s'allume pas </Link> <br />
            <Link className='linkTopcliClimatisation' to={'/climatisationIncre2'}>Ca ne refroidit pas / ça ne oeauffe pas</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ClimatisationLink
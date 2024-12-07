import React from 'react'
import './petits_travaux_link.css'
function petits_travaux_link() {

    return (
        <div>
            <Header />
            <div className='petits_travaux_link'>
                <h1><em>petits_travaux</em></h1>
                <p>Quelle est la nature du problème ?</p>
                <hr />
                <div className='petits_travaux_linkSecond'>
                    <Link className='linkToppetits_travaux' to={'/climatisationIncre'}>Ca ne s'allume pas </Link> <br />
                    <Link className='linkToppetits_travaux' to={'/climatisationIncre2'}>Ca ne refroidit pas / ça ne oeauffe pas</Link>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default petits_travaux_link
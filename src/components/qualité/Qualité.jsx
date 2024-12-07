import React from 'react';
import './qualité.css';
import BinEdk from '../../../src/image/comF.png'
const Qualité = () => {
    return (
            <div className='containerSection'>
                    <div className='containerTop'>
                        <h1 className='text-capitalize'>Simple, rapide et transparent</h1>
                        <p id='p1'>✒️ Prix connu à l'avance</p>
                        <p id='p1'>✒️ Intervention rapide dans les 2 heures</p>
                        <p id='p1'>✒️ Garantie "Satisfait ou refait" jusqu'à 6 mois</p>
                        <p id='p1'>✒️ Artisans qualifiés et assurés</p>
                    </div>
                    <div className='image'>
                        <img src={BinEdk} className='imageBottom' alt=''/>
                    </div>
            </div>
    )
}

export default Qualité;
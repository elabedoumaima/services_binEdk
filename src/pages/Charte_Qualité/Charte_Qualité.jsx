import React from 'react'
import './charte_qualité.css'
import Header from '../../components/common/heading/Header'
import Footer from '../../components/footer/Footer'
function Charte_Qualité() {
    return (
        <div className='charte_qualité_Page'>
            <Header/>
            <div className='charte_qualité'>
            <div className='charte_qualité_Top'>
                <h1>Charte qualité</h1>
                <p>Parce que votre satisfaction est notre priorité, tous les artisans rejoignant bin_edk s’engagent à respecter notre Charte Qualité. Cette charte représente nos valeurs mais aussi le niveau de qualité que nous souhaitons délivrer à tous nos clients.</p>
            </div>
            <div className="charte_qualite_second">
            <img src="image-78.png" alt="" />
            <p className='charte_qualite_second_2'></p>
                <div className='charte_qualite_second_1'>
                    <h3>Gain de temps</h3>
                    <p>Avec Bin_edk, un seul interlocuteur pour toutes vos interventions et un délai d’intervention rapide dans les 2 heures après votre commande.</p>
                </div>
                <img src="image-79.png" alt="" />
                <p className='charte_qualite_second_2'></p>
                <div className='charte_qualite_second_1'>
                    <h3>Prestations de qualité</h3>
                    <p>Nos prestations sont réalisées par plus de +100 artisans indépendants vérifiés, qualifiés et certifiés par Bin_edk et nos partenaires métiers.  Nos artisans sont évalués périodiquement par nos Experts métiers et par nos clients aussi :)</p>
                </div>
            </div>
            <div className="charte_qualite_second">
            <img src="image-80.png" alt="" />
            <p className='charte_qualite_second_2'></p>
                <div className='charte_qualite_second_1'>
                    <h3>Prix fixé à l’avance</h3>
                    <p>Pas de mauvaises suprises ! Devis détaillé avant le début de l’intervention. Vous payez le juste prix sans sur-facturation.</p>
                </div>
                <img src="image-81.png" alt="" />
                <p className='charte_qualite_second_2'></p>
                <div className='charte_qualite_second_1'>
                    <h3>Assistance & garantie</h3>
                    <p>bin_edk réalise un suivi permanent de vos interventions avec une garantie systématique “Satisfait ou Refait” allant jusqu’à 6 mois</p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Charte_Qualité
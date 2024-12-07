import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/common/heading/Header'
import './environ.css'
function Environ() {
     return (
          <div>
               <Header />
               <div className='EnvironTop'>
                    <div className='EnvironToph1'>
                         <h1><em>Services Bin_Edk</em></h1>
                    </div>

                    <div className='EnvironDescription'>
                         <video controls autoPlay>
                              <source src='0223.mp4' type='video/mp4' />
                         </video>
                         <div className='DescriptionSite'>
                              <h1>Notre mission</h1>
                              <p>Rien de moins que révolutionner le marché du dépannage en luttant contre les prestataires malhonnêtes.</p>
                              <p>Nous souhaitons offrir une solution efficace et sûre à tous nos clients afin qu’ils puissent se reposer sur notre expertise en toute confiance.</p>
                              <p>Rendre aux métiers du dépannage et de la réparation leurs lettres de noblesse et aux consommateurs la confiance en l’expertise de ces artisans, voilà le double objectif de Bin_edk !</p>
                         </div>
                    </div>
                    <hr />
                    <div className='qualityIquipeTop'>
                         <div className='qualityIquipe'>
                              <h1>Nos valeurs .</h1>
                              <p><b style={{ color: 'rgb(161, 119, 88)', fontSize: '18px' }}>Expertise :</b> Électriciens, plombiers, bricoleurs, peintres... le réseau Bin_edk compte plus de 100 artisans qualifiés, formés et validé par nos partenaires.</p>
                              <p><b style={{ color: 'rgb(161, 119, 88)', fontSize: '18px' }}>Relation Win-Win :</b>Tous les artisans membres de notre réseau oeuvrent dans le secteur formel. En faisant appel à Bin_edk, vous privilégiez la qualité et le savoir-faire. Vous êtes acteur de la transformation de ce secteur largement gangrené par l’informel !</p>
                              <p><b style={{ color: 'rgb(161, 119, 88)', fontSize: '18px' }}>Transparence :</b> En faisant le choix de Bin_edk, vous bénéficiez d'une transparence sur les prix. Fini les "à partir de" ou les mauvaises surprises, lors de votre demande d'intervention de dépannage, une fourchette tarifaire est systématiquement indiquée.</p>
                         </div>
                         <div className='qualityIquipeImage'>
                              <img src="hero-banner.png" alt="" />
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}

export default Environ
import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
export default function Hero() {
   return (
      <div>
         <section className='hero'>
            <div className="containerHero">
               <div className="row">
                  <Title subtitle={'Bienvenue à Bin_Edk'} title='Les meilleurs services vous sont fournis' />
                  <p>Avec le service  <b style={{color:'rgb(63, 145, 252)'}}><mark style={{color:'#fff',backgroundColor:'rgb(161, 119, 88)'}}>Bin_Edk</mark></b>,vos besoins sont entre vos mains .</p>
                  <p><b style={{color:'rgb(63, 145, 252)'}}><mark style={{color:'#fff',backgroundColor:'rgb(161, 119, 88)'}}>Bin_Edk</mark></b> est là pour vous faciliter la vie !</p>
               </div>
            </div>
         </section>
         
         <div className="margin">

         </div>
      </div>
   )
}


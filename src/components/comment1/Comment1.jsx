import React from 'react';
import './comment1.css';
export default function Comment1() {
    return (
        <div >
            {/* pour les clients */}
            <section className='comment1Top' id='bin_edk_clients'>
                <div className='containerComment flexSBComment'>
                    <div className="comment1ListClient rowComment">
                        <h1>les services de bin_edk pour les clients</h1>
                        <div className="comment1Items">
                            <div className='comment1Item flexSBComment'>
                                <div className="img">
                                    <img src="service-1.png" alt="" />
                                </div>
                                <div className="comment1Text">
                                    <h3>#1</h3>
                                    <p>Diagnostiquez votre probléme en ligne.</p>
                                </div>
                            </div>
                        </div>

                        <div className="comment1Items">
                            <div className='comment1Item flexSBComment'>
                                <div className="img">
                                    <img src="service-2.png" alt="" />
                                </div>
                                <div className="comment1Text">
                                    <h3>#2</h3>
                                    <p>Validez votre commande en quelques clics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment1Items">
                            <div className='comment1Item flexSBComment'>
                                <div className="img">
                                    <img src="service-3.png" alt="" />
                                </div>
                                <div className="comment1Text">
                                    <h3> #3</h3>
                                    <p>Le Pro se présente chez vous à l'heure et date prévue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment1Items">
                            <div className='comment1Item flexSBComment'>
                                <div className="img">
                                    <img src="service-4.png" alt="" />
                                </div>
                                <div className="comment1Text">
                                    <h3> #4</h3>
                                    <p>Souriez, c'est fait ! Payez et évaluez la prestation !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment1Image rowComment">
                        <img src="hero.jpg" alt="" />
                    </div>
                </div>
            </section>
            {/* pour les ouvrier */}
            <section className='comment1Topouvrier' id='bin_edk_ouvrier'>
                <div className='containerCommentouvrier flexSBCommentouvrier'>
                    <div className="comment1Imageouvrier rowCommentouvrier">
                        <img src="hero1.jpg" alt="" />
                    </div>
                    <div className="comment1ListClientouvrier rowCommentouvrier">
                        <h1>les services de bin_edk pour les ouvriers</h1>
                        <div className="comment1Itemsouvrier">
                            <div className='comment1Itemouvrier flexSBCommentouvrier'>
                                <div className="imgouvrier">
                                    <img src="service-1.png" alt="" />
                                </div>
                                <div className="comment1Textouvrier">
                                    <h3>#1</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="comment1Itemsouvrier">
                            <div className='comment1Itemouvrier flexSBCommentouvrier'>
                                <div className="imgouvrier">
                                    <img src="service-2.png" alt="" />
                                </div>
                                <div className="comment1Textouvrier">
                                    <h3> #2</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment1Itemsouvrier">
                            <div className='comment1Itemouvrier flexSBCommentouvrier'>
                                <div className="imgouvrier">
                                    <img src="service-3.png" alt="" />
                                </div>
                                <div className="comment1Textouvrier">
                                    <h3> #3</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorum.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
//    <section class="sectionComment1 features">
//         <div class="containerComment1">
//             <h2 class="section-title text-center">Comment fonctionnent nos <br></br>services de réparation et de travaux</h2>
//             <h4 className='h4-section'><p  className='h4-section-p'>Bin_<span>Edk</span></p> pour clients</h4>
//             <ul class="grid-list">
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="01">01</data>
//                         <h3 class="card-title">Free Icon Plugin</h3>
//                         <p class="card-text">Diagnostiquez votre probléme en ligne</p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="02">02</data>
//                         <h3 class="card-title">Free 6 Month Support</h3>
//                         <p class="card-text">Validez votre commande en quelques clics </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="03">03</data>
//                         <h3 class="card-title">Customer Strategy</h3>
//                         <p class="card-text">Le Pro se présente chez vous à l'heure et date prévue</p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="04">04</data>
//                         <h3 class=" card-title">Best Premimum Image</h3>
//                         <p class="card-text">Souriez, c'est fait ! Payez et évaluez la prestation !</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//         <div class="containerComment1">
//             <h4 className='h4-section'><p  className='h4-section-p'>Bin_<span>Edk</span></p> pour ouvrier </h4>
//             <ul class="grid-list">
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="01">01</data>
//                         <h3 class="card-title">Free Icon Plugin</h3>
//                         <p class="card-text">Diagnostiquez votre probléme en ligne</p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="02">02</data>
//                         <h3 class="card-title">Free 6 Month Support</h3>
//                         <p class="card-text">Validez votre commande en quelques clics </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="03">03</data>
//                         <h3 class="card-title">Customer Strategy</h3>
//                         <p class="card-text">Le Pro se présente chez vous à l'heure et date prévue</p>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="features-card">
//                         <data class="card-number" value="04">04</data>
//                         <h3 class=" card-title">Best Premimum Image</h3>
//                         <p class="card-text">Souriez, c'est fait ! Payez et évaluez la prestation !</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     </section> 

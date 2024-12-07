import React from 'react'
import './electricitéIncre2.css'
import Header from '../../../../../common/heading/Header'
import Footer from '../../../../../footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
function ElectricitéIncre2() {

    const gainableCount = useSelector(state => state.user.gainableCount);
    const splitCount = useSelector(state => state.user.splitCount);
    const dispatch = useDispatch();

    const handleWhatsappButtonClick = () => {
        window.open('https://api.whatsapp.com/send?phone=774463661','_blank');
    };
  return (
    <div>
        <Header/>
        <div className='electricitéIncre2Incre2Top'>
                <h1>Electricité</h1>
                <p>Où est localisée la panne ?</p>
                <hr />
                <div className=''>
                    <div className='electricitéIncre2displayIncre2'>
                        <p>Interrupteur </p>
                        <div className='electricitéIncre2displaybuttonIncre2'>
                            <button onClick={() => dispatch(decrementGainable())} style={{ backgroundColor: 'rgba(161, 118, 88, 0.437)' }} className='electricitéIncre2buttonIncre2'> - </button>
                            <p>{gainableCount}</p>
                            <button onClick={() => dispatch(incrementGainable())} style={{ backgroundColor: 'rgb(161, 119, 88)' }} className='electricitéIncre2buttonIncre2'>+</button>
                        </div>
                    </div>
                    <div className='electricitéIncre2displayIncre2'>
                        <p>Prise Internet </p>
                        <div className='electricitéIncre2displaybuttonIncre2'>
                            <button onClick={() => dispatch(decrementSplit())} style={{ backgroundColor: 'rgba(161, 118, 88, 0.437)' }} className='electricitéIncre2buttonIncre2'> - </button>
                            <p>{splitCount}</p>
                            <button onClick={() => dispatch(incrementSplit())} style={{ backgroundColor: 'rgb(161, 119, 88)' }} className='electricitéIncre2buttonIncre2'>+</button>
                        </div>
                    </div>
                </div>
                <button className='electricitéIncre2buttonIncre' onClick={handleWhatsappButtonClick}>ontinuer sur  Whatsapp</button>
            </div>
        <Footer/>
    </div>
  )
}

export default ElectricitéIncre2
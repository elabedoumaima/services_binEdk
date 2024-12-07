import React from 'react';
import './climatisationIncreS1.css';
import Header from '../../../../../common/heading/Header';
import Footer from '../../../../../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { decrementGainable, incrementGainable, decrementSplit, incrementSplit } from '../../../../../../redux/UserSlice';

function ClimatisationIncreS1() {
    const gainableCount = useSelector(state => state.user.gainableCount); 
    const splitCount = useSelector(state => state.user.splitCount); 
    const dispatch = useDispatch();

    const handleWhatsappButtonClick = () => {
        window.open('https://api.whatsapp.com/send?phone=774463661','_blank');
    };

    return (
        <div>
            <Header />
            <div className='climatisationIncreTop'>
                <h1>Climatisation</h1>
                <p>Où est localisée la panne ?</p>
                <hr />
                <div className='displayParagraphe'>
                    <div className='displayIncre'>
                        <p>Climatisation gainable centralisée </p>
                        <div className='displaybuttonIncre'>
                            <button onClick={() => dispatch(decrementGainable())} style={{ backgroundColor: 'rgba(161, 118, 88, 0.437)' }} className='buttonIncre'> - </button>
                            <p>{gainableCount}</p>
                            <button onClick={() => dispatch(incrementGainable())} style={{ backgroundColor: 'rgb(161, 119, 88)' }} className='buttonIncre'>+</button>
                        </div>
                    </div>
                    <div className='displayIncre'>
                        <p>Climatisation individuelle (Split) </p>
                        <div className='displaybuttonIncre'>
                            <button onClick={() => dispatch(decrementSplit())} style={{ backgroundColor: 'rgba(161, 118, 88, 0.437)' }} className='buttonIncre'> - </button>
                            <p>{splitCount}</p>
                            <button onClick={() => dispatch(incrementSplit())} style={{ backgroundColor: 'rgb(161, 119, 88)' }} className='buttonIncre'>+</button>
                        </div>
                    </div>
                </div>
                <button className='buttonIncre1' onClick={handleWhatsappButtonClick}>ontinuer sur  Whatsapp</button>
            </div>
            <Footer />
        </div>
    )
}

export default ClimatisationIncreS1;

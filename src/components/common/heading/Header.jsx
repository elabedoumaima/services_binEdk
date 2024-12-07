import React, {useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'
function Header() {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
                        <li><Link to={"/"}>Accueil</Link></li>
                        <li><Link to={"/environ"}>Environ</Link></li>
                        <li><Link to={"/servicesPage"}>Services</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                        <li><Link to={"/login"}>Connectez-vous</Link></li>
                    </ul>
                    <div className='start'>
                        <div className="button">OBTENIR DES SERVICES</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)} >
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header
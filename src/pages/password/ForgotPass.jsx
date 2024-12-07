import React, { useState } from 'react';
import "./forgotPass.css";
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import Header from '../../components/common/heading/Header';
import Footer from '../../components/footer/Footer';
const formSchema = z.object({
    email: z.string().email().min(2, "Email must be at least 2 characters long").max(30, "Email must be at most 30 characters long"),
});
export default function ForgotPass() {
    const [emailError, setEmailError] = useState("");
    const [email, setEmail] = useState("");
    
    const sendEmail = (e) => {
        e.preventDefault();
        setEmailError("");
        const formData = { email };
        try {
            formSchema.parse(formData);
            console.log("Form data is valid:", formData);
        } catch (error) {
            error.errors.forEach((err) => {
                if (err.path[0] === 'email') {
                    setEmailError(err.message);
                }
            });
            console.error("Form validation failed:", error.errors);
        }
    };   

    return (
        <div className='ForgotFormPage'>
            <Header/>
            <div className='ForgotForm'>
            <form onSubmit={sendEmail} action='' className='FormForgot'>
                <h1>Mot de passe oublié</h1>
                <div className='InputForm'>
                    <input type='email' placeholder='E_mail'  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <Email className='iconFormForgot'/>
                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                </div>
                <div className='ForgotLink'>
                    <p style={{marginBottom:'30px'}}>Nécessite que votre adresse e-mail principale ou secondaire soit vérifiée dans <b style={{color:'rgb(161, 119, 88)'}}>Bin_Edk</b>.</p>
                </div>
                <button type='submit'>Réinitialiser le mot de passe</button>
                <div className='ForgotLink'>
                    <p>Vous avez déjà un compte? <Link to={'/login'}>Login</Link></p>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    );
}

import React, { useState } from 'react';
import { Email, Lock, Person } from '@mui/icons-material';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/heading/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function Register() {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const IsValidate = () => {
        let isProceed = true;
        let errorMessage = 'Please enter the value into';
        if (!/^[a-zA-Z]+$/.test(prenom)) {
            isProceed = false;
            errorMessage += " Prénom (letters only)";
        }
        if (!/^[a-zA-Z]+$/.test(nom)) {
            isProceed = false;
            errorMessage += " Nom (letters only)";
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isProceed = false;
            errorMessage += " Email ";
        }
        if (!password.trim() || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
            isProceed = false;
            errorMessage += " Password ";
        }
        if (!isProceed) {
            alert(errorMessage);
        } else {
            alert("Registered successfully.");
                // Email is valid
        } return isProceed;
    }


    dispatch({
        type : "REGISTER",
        payload :{nom,prenom,email,password}
    })    
    const sendEmail = async(e) => {
        e.preventDefault();

        try{
            const formData = {
                prenom,
                nom,
                email,
                password
            };
            if (IsValidate()) {

                const response=await axios.post('http://localhost:5000/users',formData);
                console.log('User added:',response.data);
                navigate('/login')
            }else{
                console.log("Form validation failed . User not added");
            }    

            setPrenom('');
            setNom('');
            setEmail('');
            setPassword('');
        }catch(err){
            console.error("Error adding user",err)
        };
    };

    return (
        <div className='RegisterTopPage'>
            <Header/>
            <div className='RegisterTop'>
            <form className='RegisterForm' onSubmit={sendEmail}>
                <h1>Register</h1>
                <div className='RegisterInput'>
                    <input type='text' placeholder='First Name' value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                    <Person className='iconsRegister' />
                </div>
                <div className='RegisterInput'>
                    <input type='text' placeholder='Last Name' value={nom} onChange={(e) => setNom(e.target.value)} required />
                    <Person className='iconsRegister' />
                </div>
                <div className='RegisterInput'>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Email className='iconsRegister' />
                </div>
                <div className='RegisterInput'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Lock className='iconsRegister' />
                </div>
                <button type='submit'>Register</button>
                <div className='LoginLink'>
                    <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    );
}

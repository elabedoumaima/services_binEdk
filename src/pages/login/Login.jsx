import React, { useState } from 'react';
import { Lock, Person } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Header from '../../components/common/heading/Header';
import Footer from '../../components/footer/Footer';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/UserSlice';
import axios from 'axios';
function Login() {
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const usenavigate = useNavigate()
  const dispatch = useDispatch()
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  const sendEmailLogin = async (e) => {
    e.preventDefault();
    dispatch(login({
      email: email,
      password: password,
      loggedIn: true,
    }));
    if (!email.trim() || !password.trim()) {
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        alert("Your login has been made successfully")
        usenavigate('/');
      } else {
        alert('invalide email or password');
      }
    } catch (err) {
      console.error('Error logging in error');
    }
  };

  return (
    <div className='loginTopPage'>
      <Header />
      <div className='loginTop'>
        <form action='' className='loginForm' onSubmit={sendEmailLogin}>
          <h1>Connectez-vous</h1>
          <div className='inputBox'>
            <input type='email' placeholder='Nom d’utilisateur' value={email} onChange={(e) => emailupdate(e.target.value)} required />
            <Person className='iconLogin' />
          </div>
          <div className='inputBox'>
            <input type='password' placeholder='Mot de passe' value={password} onChange={(e) => passwordupdate(e.target.value)} required />
            <Lock className='iconLogin' />
          </div>
          <div className="rememberForgot">
            <label className='labelLogin'><input className='checkbox' type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />Rappelle-moi</label>
            <Link to={'/forgotPass'}>Mot de passe oublié?</Link>
          </div>
          <button type='submit'>Login</button>
          <div className='registerLink'>
            <p> Vous n’avez pas de compte? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login;

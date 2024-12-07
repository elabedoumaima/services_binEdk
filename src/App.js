import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Depannage from './components/services/depannage/Depannage'
import Petits_travaux from './components/services/petits_travaux/Petits_travaux'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Environ from './pages/environ/Environ'
import Services from './pages/services/Services'
import NotFound from './pages/notFound/NotFound'
import ForgotPass from './pages/password/ForgotPass'
import Rejoignez_le_réseau_de_Pros from './pages/Rejoignez_le_réseau_de_Pros/Rejoignez_le_réseau_de_Pros'
import Charte_Qualité from './pages/Charte_Qualité/Charte_Qualité'
import { useSelector } from 'react-redux'
import { selectUser } from './redux/UserSlice'
import { Logout } from '@mui/icons-material'
import Climatisation from './components/services/depannage/climatisation/Climatisation'
import ClimatisationLink from './components/services/depannage/climatisation/climatisationLink/ClimatisationLink'
import ClimatisationIncreS1 from './components/services/depannage/climatisation/climatisationLink/climatisationIncre/climatisationIncreS1'
import Electricité from './components/services/depannage/Electricité/Electricité'
import ClimatisationIncre2 from './components/services/depannage/climatisation/climatisationLink/climatisationIncre2/climatisationIncre2'
import ElectricitéIncre from './components/services/depannage/Electricité/ElectricitéLikn/ElectricitéIncre/ElectricitéIncre'
import ElectricitéIncre2 from './components/services/depannage/Electricité/ElectricitéLikn/ElectricitéIncre2/ElectricitéIncre2'
import Plomberie from './components/services/depannage/Plomberie/Plomberie'
function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/environ' element={<Environ />} />
          <Route path='/depannage' element={<Depannage />} />
          <Route path='/servicesPage' element={<Services />} />
          <Route path='/petits_travaux' element={<Petits_travaux />} />
          <Route path="/forgotPass" element={<ForgotPass />} />
          <Route path="/charte_qualité" element={<Charte_Qualité />} />
          <Route path='/afficherEmployeSpecialise' element={<Rejoignez_le_réseau_de_Pros />} />
          <Route path='/climatisation' element={<Climatisation />} />
          <Route path='/climatisationLink' element={<ClimatisationLink />} />
          <Route path='/climatisationIncre' element={<ClimatisationIncreS1 />} />
          <Route path='/climatisationIncre2' element={<ClimatisationIncre2 />} />
          <Route path='/Electricité' element={<Electricité />} />
          <Route path='/electricitéIncre' element={<ElectricitéIncre />} />
          <Route path='/electricitéIncre2' element={<ElectricitéIncre2/>}/>
          <Route path='/plomberie' element={<Plomberie/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
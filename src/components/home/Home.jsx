import Hero from './hero/Hero';
import Comment1 from '../comment1/Comment1';
import Commentaire from '../commentaire/Commentaire';
import Qualité from '../qualité/Qualité';
import Accordion from '../accordion/Accordion';
import Contact from '../contact/Contact';
import ServicesC from '../services/ServicesC';
import HeaderBothom from '../headerBottom/HeaderBothom';
import Welcome from '../welcome/Welcome';
import WhatSappCall from '../whatSappCall/WhatSappCall';
import Header from '../common/heading/Header';
import Footer from '../footer/Footer';
// import Popup from '../whatSappCall/popur';
export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <HeaderBothom />
      <Welcome />
      <ServicesC />
      <Qualité />
      <Comment1 />
      <Commentaire/>
      <Accordion />
      <Contact />
      <WhatSappCall />
      {/* <Popup/> */}
      <Footer/>
    </>
  )
}


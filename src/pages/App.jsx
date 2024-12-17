import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Router-ı import edirik
import '../main.css';
import Header from '../components/Header';
import HeroSect from '../components/HeroSect';
import InfoCardsSect from '../components/InfoCardsSect';
import ServicesSect from '../components/ServicesSect';
import OfferSect from '../components/OfferSect';
import PartnersSect from '../components/PartnersSect';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import AboutUsSect from '../components/AboutUsSect';
import ContactSect from '../components/ContactSect';

const App = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        
        <Route path="/" element={
          <>
            <HeroSect />
            <InfoCardsSect />
            <ServicesSect />  
            <OfferSect />
            <PartnersSect />
            <ContactForm />
          </>
        } />

        <Route path='/contact' element={<ContactSect/>} />
        <Route path='/aboutUs' element={<AboutUsSect/>} />
        <Route path="/services" element={<ServicesSect />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

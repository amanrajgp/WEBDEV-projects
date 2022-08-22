import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Experience from './components/experience/experience';
import Testimonials from './components/testimonials/testimonials';
import Portfolio from './components/portfolio/portfolio';
import About from './components/About/about';
import Contacts from './components/contacts/contacts';


const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
export default App;

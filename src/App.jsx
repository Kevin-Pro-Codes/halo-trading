import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import haloLogo from './assets/halo.png';

import Navbar from './Navbar.jsx';
import IntroSection from "./components/IntroSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import LatestSection from "./components/LatestSection.jsx";
import DocSection from "./components/DocSection.jsx";
import SetupSection from "./components/SetupSection.jsx";
import PerformanceSection from './components/PerformanceSection.jsx';
import ConverterSection from './components/ConverterSection.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import PricingSection from './components/PricingSection.jsx';
import Footer from './Footer.jsx';

import './App.css';
import './styles/NavbarStyle.css';
import './styles/IntroStyle.css';
import './styles/FaqStyle.css';
import './styles/LatestStyle.css';
import './styles/DocStyle.css';
import './styles/SetupStyle.css';
import './styles/PerformanceStyle.css';
import './styles/ConverterStyle.css';
import './styles/TestimonialStyle.css';
import './styles/GalleryStyle.css';
import './styles/PricingStyle.css';
import './styles/FooterStyle.css';


function App() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  
 
  const [btcAmount, setBtcAmount] = useState(1);
  const [usdAmount, setUsdAmount] = useState(50000); // Sample rate
  const [btcPrice, setBtcPrice] = useState(50000); // Current BTC price in USD

  useEffect(() => {
    const checkResponsive = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      
      const zoomLevel = window.devicePixelRatio;
      setIsZoomed(zoomLevel > 1.3);
      
      if (!mobileCheck && !isZoomed) {
        setMenuOpen(false);
      }
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, [isZoomed]);



  const showHamburger = isMobile || isZoomed;

  {/* <div className="app-container" style={{ zoom: 3 }}> */}
  
  return ( 
    <div className="app-container">
    
      {/* Navbar */}
<Navbar showHamburger={showHamburger} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Sections Content */}
      <main>
       
        {/*Basic Intro Section */}

       <IntroSection count={count} setCount={setCount} />       

        {/* FAQ Section */}
       
       <FaqSection/>

        {/* Latest Updates */}
      
      <LatestSection/>

        {/* Documentation */}
    
      <DocSection/>

        {/* Setup Guide */}

       <SetupSection/>

        {/* Performance Metrics */}
       
       <PerformanceSection/>

        {/* BTC/USD Converter */}
       
       <ConverterSection/>

        {/* Testimonials */}
     
       <TestimonialSection/>

 {/* Gallery */}


<GallerySection/>


        {/* Pricing */}
       

<PricingSection/>


      </main>

      {/* Footer */}
      
<Footer/>

    </div>
  );
}

export default App;
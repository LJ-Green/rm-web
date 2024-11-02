import React, { useEffect } from 'react';
import "./App.css";
import Nav from "../src/components/nav";
import ContactBanner from "./components/contactBanner";
import Details from "./components/details";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import { IconBrandFacebook, IconMail, IconPhone } from "@tabler/icons-react";
import LandingImage from "./assets/landing.png";
import LandingLogo from "./assets/landing-logo.png";
import QLogoA from "./assets/qualification-logos 2.png";
import QLogoB from "./assets/qualification-logos 3.png";
import QLogoC from "./assets/qualification-logos 4.png";
import FooterLogo from "./assets/footer-logo.png";
import DetailBackground from "./assets/detail-background.png";

function App() {

  return (
    <>
      <Nav />
      <div className='landing-banner-container'>
      <div className="landing-container">
        <div className="landing-image-container">
          <img src={LandingImage} alt="RM Electrical Services" />
        </div>
        <div className="landing-content-container">
          <img src={LandingLogo} alt="RM Electrical Services" />
          <h1>Expert electrical services</h1>
          <p>
            Quality solutions for all your residential and commercial electrical
            needs.
          </p>
        </div>
      </div>
      <ContactBanner />
      </div>
      <div className="content-container">
        <Details />
        {/* <div className="social-buttons-container">
          <button>
            <IconPhone stroke={2} color="#f7ff00" size={30} />
          </button>
          <button>
            <IconMail stroke={2} color="#f7ff00" size={30} />
          </button>
          <button>
            <IconBrandFacebook color="#f7ff00" size={30} stroke={2} />
          </button>
        </div> */}
        <Gallery />
        <div className="qualifications-container">
          <div className="qualifications-icon-container">
            <img src={QLogoA} />
            <img src={QLogoB} />
            <img src={QLogoC} />
          </div>
          <img src={FooterLogo} />
        </div>
        {/* <div className="background-container">
          <img src={DetailBackground} alt="Background" />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;

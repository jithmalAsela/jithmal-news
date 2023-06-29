import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const getCurrentDateTime = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <header className="header text-center bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
          <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <span className="icon-space"></span>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <span className="icon-space"></span>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-white">{getCurrentDateTime()}</p>
          </div>
        </div>
        <h1 className="text-uppercase text-white">News Website</h1>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ultrices lacus. Duis feugiat, urna in consectetur tincidunt, lorem velit tempus urna, at commodo lacus nunc eu nisi.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>123 Street, Galle, Sri Lanka</p>
            <p>Email: jithmal.matharage@gmail.com</p>
            <p>Phone: +94 123456789</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <p>&copy; 2023 News Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

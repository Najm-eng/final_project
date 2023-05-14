import React from 'react';

const Footer = () => {
  return (
    <>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For special offers</h4>
          <p>
            Get E-mail updates about our latest shop and{' '}
            <span>special offers.</span>{' '}
          </p>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> 562 Wellington Road, Street 32, San
            Francisco
          </p>
          <p>
            <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="about.html">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="login.html">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways </p>
          <img src="/pay/app.jpg" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

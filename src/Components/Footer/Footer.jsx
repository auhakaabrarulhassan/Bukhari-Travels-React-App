import React from 'react'
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="website-social-links">
                <p className="short-intro">
                  <span className="brownish-color">"Bukhari Travels"</span> – Your
                  trusted partner for spiritual journeys. We specialize in offering
                  comprehensive Umrah and Hajj services, ensuring a seamless and
                  spiritually enriching experience for every pilgrim. From visa
                  assistance to accommodation, transportation, and guidance, we take
                  care of every detail with dedication and care. Let us help you
                  focus on your worship while we handle the rest. Begin your journey
                  of a lifetime with Bukhari Travels – where your comfort and
                  satisfaction are our priorities.
                </p>
                <h4 className="follow-us brownish-color">Follow Us</h4>
                <span className="social-links">
                  <Link to="">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link to="">
                    <i className="fa-brands fa-tiktok " />
                  </Link>
                  <Link to="">
                    <i className="fa-brands fa-instagram " />
                  </Link>
                  <Link to="">
                    <i className="fa-brands fa-linkedin " />
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="quick-links-section">
                <h4 className="links-header">Quicklinks</h4>
                <ul>
                  <li className="quick-links">
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Investment</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Careers</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>FaQS</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Islam</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Syekh</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Training</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="quick-links-section">
                <h4 className="links-header">About</h4>
                <ul>
                  <li className="quick-links">
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Agency</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Services</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Packages</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Our Vision</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>News</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="quick-links-section">
                <h4 className="links-header">Customer</h4>
                <ul>
                  <li className="quick-links">
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Customer</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Insurance</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>Regulation</span>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-angle-right icon text-blinking" />
                      <span>FaQS</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="news-letter-section">
                <h4 className="links-header">NewsLetter</h4>
                <p className="short-intro" id="email">
                  Subscribe our newsletter for our latest updates.
                </p>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="newsletter-input"
                    placeholder="Add Email"
                  />
                  <button type="button" className="subscribe-button" id="email">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copywrigth-footer">
        COPYRIGHT 2024 Bukhari Travels Pvt Ltd
      </div>
    </>
  );
}

export default Footer;

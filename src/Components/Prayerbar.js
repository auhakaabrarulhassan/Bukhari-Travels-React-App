import React from 'react';
import './Prayerbar.css';
export default function Prayerbar() {
  return (
    <header className="parent-container">
    <div className="container p-0">
      <ul className="prayers-times-bar m-0">
        <li>
          {/* Email Area */}
          <section className="email-section">
            <div className="email-logo">
              <i className="fa-solid fa-envelope logo-style" />
            </div>
            <div className="email-description">
              <span>Email</span>
              <p className="m-0">
                <a href="mailto:abrarulhassan@gmail.com">
                  info@bukharitravels.pk
                </a>
              </p>
            </div>
          </section>
        </li>
        <li>
          {/* Customer Care Service are */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-phone logo-style" />
            </div>
            <div className="email-description">
              <span>Customer Care</span>
              <p className="m-0">
                <a href="tel:+923279431200">+92 327 9431200</a>
              </p>
            </div>
          </section>
        </li>
        <li>
          {/* Fajar Timing */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-sun-cloud logo-style" />
            </div>
            <div className="email-description">
              <span>Fajar</span>
              <p className="m-0 text-blinking">05.00 am</p>
            </div>
          </section>
        </li>
        <li>
          {/* Dhuhr Timing */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-sun logo-style" />
            </div>
            <div className="email-description">
              <span>Dhuhr</span>
              <p className="m-0 text-blinking">12.00 pm</p>
            </div>
          </section>
        </li>
        <li>
          {/* Asr Timing */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-cloud logo-style" />
            </div>
            <div className="email-description">
              <span>Al-Asr</span>
              <p className="m-0 text-blinking">15.30 pm</p>
            </div>
          </section>
        </li>
        <li>
          {/* Magrib timing */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-moon-cloud logo-style" />
            </div>
            <div className="email-description">
              <span>Maghrib</span>
              <p className="m-0 text-blinking">18.00 pm</p>
            </div>
          </section>
        </li>
        <li>
          {/* Esha Timing  */}
          <section className="email-section">
            <div>
              <i className="fa-solid fa-moon logo-style" />
            </div>
            <div className="email-description">
              <span>Isha</span>
              <p className="m-0 text-blinking">19.00 pm</p>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </header>
  
      )
}

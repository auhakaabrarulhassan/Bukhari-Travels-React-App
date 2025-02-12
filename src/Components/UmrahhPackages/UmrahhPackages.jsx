import React from 'react'
import "../UmrahhPackages/UmrahhPackages.css";
import { Link } from 'react-router-dom';
function UmrahhPackages() {
  return (
    <section className="umrahh-packages-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 .col-md-12 col-sm-12">
        <div className="umrahh-packages-page-content">
          <h4 className="u-packages-page-title">Packages</h4>
          <h4 className="u-packages-page-title-description">
            Umrah and Hajj Packages
          </h4>
        </div>
      </div>
    </div>
    <div className="row">
      {/* 09 Days Package plan */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="packages-plan-card">
          <div className="card-1-image">
            <div className="overlayed-box">
              <p className="package-days">Days</p>
              <h4 className="package-duration">09</h4>
            </div>
          </div>
          <div className="packages-card-creditials">
            <h4 className="package-level">Basic Umrah</h4>
            <p className="package-price">
              <span className="currency">$</span>
              <span className="currency-value"> 2.000</span>
              <span className="trip-text">/Trip</span>
            </p>
            <p className="card-description">
              All aspects of your software assets including purchasing,
              deployment &amp; maintenance.
            </p>
          </div>
          <div className="package-items">
            <p>
              <i className="fa-regular fa-badge-check" />
              Passport &amp; Visa
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Five Star Hotel
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Free 30Kg Suitcase
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Economy Seat
            </p>
          </div>
          <button className="book-now-button">Booked Now</button>
        </div>
      </div>
      {/* 30 Days Package Plan */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="packages-plan-card">
          <div className="card-2-image">
            <div className="overlayed-box">
              <p className="package-days">Days</p>
              <h4 className="package-duration">30</h4>
            </div>
          </div>
          <div className="packages-card-creditials">
            <h4 className="package-level">Basic Hajj</h4>
            <p className="package-price">
              <span className="currency">$</span>
              <span className="currency-value"> 10.000</span>
              <span className="trip-text">/Trip</span>
            </p>
            <p className="card-description">
              All aspects of your software assets including purchasing,
              deployment &amp; maintenance.
            </p>
          </div>
          <div className="package-items">
            <p>
              <i className="fa-regular fa-badge-check" />
              Passport &amp; Visa
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Five Star Hotel
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Free 30Kg Suitcase
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Economy Seat
            </p>
          </div>
          <button className="book-now-button">Booked Now</button>
        </div>
      </div>
      {/* 45 Days Package Plan */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="packages-plan-card">
          <div className="card-3-image">
            <div className="overlayed-box">
              <p className="package-days">Days</p>
              <h4 className="package-duration">45</h4>
            </div>
          </div>
          <div className="packages-card-creditials">
            <h4 className="package-level">Hajj &amp; Turkey</h4>
            <p className="package-price">
              <span className="currency">$</span>
              <span className="currency-value">13.000</span>
              <span className="trip-text">/Trip</span>
            </p>
            <p className="card-description">
              All aspects of your software assets including purchasing,
              deployment &amp; maintenance.
            </p>
          </div>
          <div className="package-items">
            <p>
              <i className="fa-regular fa-badge-check" />
              Passport &amp; Visa
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Five Star Hotel
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Free 30Kg Suitcase
            </p>
            <p>
              <i className="fa-regular fa-badge-check" />
              Economy Seat
            </p>
          </div>
          <button className="book-now-button">Booked Now</button>
        </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
          <h2 className='page-directoring'>
          For Further Detail Visit Us
          <Link to = "/features"><p>
          More Packages Detail
            </p></Link>
        </h2>
          </div>
        </div>
    </div>
  </div>
</section>

  )
}

export default UmrahhPackages

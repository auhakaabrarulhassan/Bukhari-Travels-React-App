import React from "react";
import "./Homebooking.css";
export default function Homebooking() {
  return (
    <section className="home-booking-page">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="page-content">
                <h4 className="page-title">
                  Discover Divine Destinations with Ease
                </h4>
                <h4 className="page-title-description">
                  Creating Memorable Moments of Faith and
                  <span className="brownish-color"> Reflection</span>
                </h4>
                <button className="book-service-button">Booked Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import './HowBook.css'

function HowBook() {
  return (
    <section className="how-to-book-section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="page-content">
                <h4 className="page-title">How to Booked?</h4>
                <h4 className="page-title-description">
                  Follow these 3 Easy Steps to Booked Your Pilgrism Trip
                </h4>
                <div className="booking-steps">
                  <div className="step-box">
                    <div className="box-icon">
                      <i className="fa-solid fa-book icon-edit" />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Fill out the Booking Form</h4>
                      <p className="box-description">
                        Complete the booking form with your details to secure
                        your reservation and ensure a smooth process.
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <div className="box-icon">
                      <i className="fa-solid fa-credit-card icon-edit" />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Do Down Payment Trip</h4>
                      <p className="box-description">
                        Secure your trip with a down payment and pay the rest
                        later. Book now and enjoy flexible travel planning!
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <div className="box-icon">
                      <i className="fa-solid fa-kaaba icon-edit" />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">
                        Confirmation and Do Pilgrism
                      </h4>
                      <p className="box-description">
                        Confirm your booking to secure your pilgrimage journey
                        and enjoy a seamless, spiritual experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowBook;

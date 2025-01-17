import React from 'react';
import './Pilgrimguidance.css';

export default function Pilgrimguidance() {
  return (
    <section className="pilgrim-guidance-page">
  <div className="overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="page-content">
            <h4 className="page-title">
              Embark on a Spiritual Journey of a Lifetime
            </h4>
            <h4 className="page-title-description">
              Embark on a Spiritual Journey of a Lifetime Guiding Your
              Pilgrimage, Every Step
              <span className="brownish-color">of the Way</span>
            </h4>
            <button className="book-service-button">Booked Service</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="yt-vedio-button">
            <a className="anchor-style yt-vedio-link-button" target="_blank">
              <i className="fa-solid fa-play text-blinking" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

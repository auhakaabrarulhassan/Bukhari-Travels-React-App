import React from 'react';
import './NewsSection.css';
import Img1 from '../NewsSection/Assets/Img1.png';
import Img2 from '../NewsSection/Assets/Img2.png';
import Img3 from '../NewsSection/Assets/Img3.png';


function NewsSection() {
  return (
    <section className="news-section">
  <div className="news-content">
    <h4 className="news-section-header">News</h4>
    <h4 className="news-description">Islam and Al-Quran</h4>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-body">
          <div className="card">
            <img src={Img1} alt="" />
            <h3 className="card-sub-title">
              Umrah Travel Resumes with Stringent Health…
            </h3>
            <p className="card-description">
              Umrah travel has resumed with strict health protocols, including
              screenings, vaccinations, and social distancing. These measures
              ensure a safe and organized experience for all pilgrims.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-body">
          <div className="card">
            <img src={Img2} alt="" />
            <h3 className="card-sub-title">
              Hajj Pilgrimage: A Journey of Faith…
            </h3>
            <p className="card-description">
              A Journey of Faith has resumed with strict health protocols,
              including screenings, vaccinations, and social distancing,
              ensuring a safe and spiritual experience for all pilgrims.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-body">
          <div className="card">
            <img src={Img3} alt="" />
            <h3 className="card-sub-title">
              Hajj Pilgrimage: A Journey of Faith…
            </h3>
            <p className="card-description">
              A Journey of Faith has resumed with strict health protocols,
              including screenings, vaccinations, and social distancing,
              ensuring a safe and spiritual experience for all pilgrims.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default NewsSection

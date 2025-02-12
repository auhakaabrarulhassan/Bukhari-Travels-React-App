import React from "react";
import '../PilgrimReviews/PilgrimReviews.css';
import Person1 from './Assets/Ibrahim.png';
import Person2 from './Assets/Reviwer 2.png';
import Person3 from './Assets/Reviwer 3.png';
function PilgrimReviews() {
  return (
    <section className="testimonial-pilgrim-review">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 .col-md-12 col-sm-12">
            <div className="umrahh-pakages-page-content">
              <h4 className="u-packages-page-title">Testimonial</h4>
              <h4 className="u-packages-page-title-description">
                Our Holy Pilgrism Review
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="review-box">
              <div className="review-stars-bar">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </div>
              <p className="review-content">
                I recently performed Umrah with a package from
                <b>Bukhari Travels</b>, and it was an exceptional experience.
                Their seamless arrangements, comfortable accommodations, and
                constant support made my journey truly unforgettable.
              </p>
              <div className="reviewer">
                <div className="reviewer-image">
                <img src={Person1} alt="" />
                </div>
                <div className="reviwer-name">
                  <h4>Ibrahim</h4>
                  <p className="pilgrimage-category">Umrah</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="review-box">
              <div className="review-stars-bar">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </div>
              <p className="review-content">
                Hajj was a life-changing experience, made seamless by
                <b>Bukhari Travels</b>. Their well-organized package,
                comfortable accommodations, and expert guidance allowed me to
                focus on the spiritual journey. Highly recommended!
              </p>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Person2} alt="" />
                </div>
                <div className="reviwer-name">
                  <h4>Fatimah</h4>
                  <p className="pilgrimage-category">Hajj</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="review-box">
              <div className="review-stars-bar">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </div>
              <p className="review-content">
                I had a wonderful experience performing Hajj with
                <b>Bukhari Travels</b>. Everything was well-organized, the
                hotels were close to the Haram, and the staff was very helpful.
                It made my journey smooth and stress-free.
              </p>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Person3} alt="" />
                </div>
                <div className="reviwer-name">
                  <h4>Omar</h4>
                  <p className="pilgrimage-category">Umrah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PilgrimReviews;

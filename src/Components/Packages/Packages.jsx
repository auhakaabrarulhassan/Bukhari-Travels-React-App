import React from 'react'
import { Link } from 'react-router-dom';
import "../Packages/Packages.css"
import image1 from "../Packages/Assets/Package-img-1.png";
import image2 from "../Packages/Assets/Package-img-2.png";
import image3 from "../Packages/Assets/Package-img-3.png";
import image4 from "../Packages/Assets/Package-img-4.png";
import image5 from "../Packages/Assets/Package-img-5.png";
import image6 from "../Packages/Assets/Package-img-6.png";
import image7 from "../Packages/Assets/Package-img-7.png";
import image8 from "../Packages/Assets/Package-img-8.png";
import image9 from "../Packages/Assets/Package-img-9.png";
import image10 from "../Packages/Assets/Package-img-10.png";
import image11 from "../Packages/Assets/Package-img-11.png";
import image12 from "../Packages/Assets/Package-img-12.png";
import image13 from "../Packages/Assets/Package-img-13.png";
import image14 from "../Packages/Assets/Package-img-14.png";
import image15 from "../Packages/Assets/Package-img-15.png";
import image16 from "../Packages/Assets/Package-img-16.png";
import image17 from "../Packages/Assets/Package-img-17.png";
import image18 from "../Packages/Assets/Package-img-18.png";
import image19 from "../Packages/Assets/Package-img-19.png";
import image20 from "../Packages/Assets/Package-img-20.png";
import image21 from "../Packages/Assets/Package-img-21.png";
import image22 from "../Packages/Assets/Package-img-22.png";
import image23 from "../Packages/Assets/Package-img-23.png";
import image24 from "../Packages/Assets/Package-img-24.png";
import image25 from "../Packages/Assets/Package-img-25.png";
import image26 from "../Packages/Assets/Package-img-26.png";
import image27 from "../Packages/Assets/Package-img-27.png";
import image28 from "../Packages/Assets/Package-img-28.png";
import image29 from "../Packages/Assets/Package-img-29.png";
import image30 from "../Packages/Assets/Package-img-30.png";
import image31 from "../Packages/Assets/Package-img-31.png";
import image32 from "../Packages/Assets/Package-img-32.png";
import image33 from "../Packages/Assets/Package-img-33.png";
import image34 from "../Packages/Assets/Package-img-34.png";
import image35 from "../Packages/Assets/Package-img-35.png";
import image36 from "../Packages/Assets/Package-img-36.png";
import image37 from "../Packages/Assets/Package-img-37.png";
import image38 from "../Packages/Assets/Package-img-38.png";
import image39 from "../Packages/Assets/Package-img-39.png";
import image40 from "../Packages/Assets/Package-img-40.png";
import image41 from "../Packages/Assets/Package-img-41.png";

function Packages() {
  return (
    <div>
      <div className="umrahh-packages-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="p-title">
          <h2 className="text-center">9 Umrah Packages for you</h2>
        </div>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {/* First Carousel with Unique ID */}
          <div
            id="carouselExampleIndicators1"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image2}
                  className="d-block w-100"
                  alt="side-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the first package content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <div className="package-title">
              <strong>
                <h3>Ramadan Umrah - With Miqat in Madinah</h3>
              </strong>
            </div>
            <div className="row">
              <div className="package-items">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-1 text-green mb-2">
                    <i className="fa-regular fa-leaf" />
                    <span className="text-bold">
                      Ziarah &amp; Umrah Guide Optional
                    </span>
                  </p>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-2 text-pink">
                    <i className="fa-solid fa-flag" />
                    <span className="text-bold">All-inclusive Package</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="package-days">Madinah 1N . Makkah 1N</p>
            <div className="row">
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">Emaar Taiba Hotel</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">3 Nights</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">1,743.32</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Second Package Content */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {/* Second Carousel with Unique ID */}
          <div
            id="carouselExampleIndicators2"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image4}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image5}
                  className="d-block w-100"
                  alt="side-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image6}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image7}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the second package content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <div className="package-title">
              <h3>Umrah Package – Miqat from Madinah</h3>
            </div>
            <div className="row">
              <div className="package-items">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-1 text-green mb-2">
                    <i className="fa-regular fa-leaf" />
                    <span className="text-bold">
                      Ziarah Included | Umrah Guide Optional
                    </span>
                  </p>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-2 text-pink">
                    <i className="fa-solid fa-flag" />
                    <span className="text-bold">
                      Miqat Dhul Hulaifa in Madinah
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="package-days">Madinah 1N . Makkah 1N</p>
            <div className="row">
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">Emaar Taiba Hotel</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">2 Nights</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">1,486.16</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Third Umrahh Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {/* Second Carousel with Unique ID */}
          <div
            id="carouselExampleIndicators3"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators3"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image8}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image9}
                  className="d-block w-100"
                  alt="side-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image10}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image11}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the second package content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <div className="package-title">
              <h3>Umrah Package - Makkah Only</h3>
            </div>
            <div className="row">
              <div className="package-items">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-1 text-green mb-2">
                    <i className="fa-regular fa-leaf" />
                    <span className="text-bold">
                      Ziarah &amp; Umrah Guide Optional
                    </span>
                  </p>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <p className="item-2 text-pink">
                    <i className="fa-solid fa-flag" />
                    <span className="text-bold">All-inclusive package</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="package-days">Makkah 1N</p>
            <div className="row">
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Islamabad - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Jeddah - Islamabad
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">1 Night</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">2,724.71</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fouth Umrahh Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {/* Second Carousel with Fixed ID */}
          <div
            id="carouselExampleIndicators4"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators4"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators4"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators4"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image12}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image13}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image14}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">Ramadan Umrah - Makkah Exclusive</h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Ziarah &amp; Umrah Guide Optional
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">All-inclusive package</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Islamabad - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Jeddah - Islamabad
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">1 Night</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">2,754.76</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fifth Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            id="carouselExampleIndicators5"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators5"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators5"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators5"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators5"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image15}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image16}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image17}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image18}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">
              Exclusive - Umrah with Address Hotel
            </h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Ziarah &amp; Umrah Guide Optional
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">All-inclusive package</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Islamabad - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Jeddah - Islamabad
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  5 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">
                  Address Jabal Omar Makkah
                </span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">2 Nights</p>
            <p className="hotel-category text-bold">5 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">7,474.46</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sixth Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            id="carouselExampleIndicators6"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators6"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators6"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators6"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image19}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image20}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image21}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">
              Ramadan Umrah Pilgrimage - Concludes in Madinah
            </h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Ziarah &amp; Umrah Guide Optional
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">All-inclusive package</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 1N . Madinah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Lahore - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Madinah - Lahore
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">Emaar Taiba Hotel</span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">2 Nights</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">3,640.79</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Seventh Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            id="carouselExampleIndicators7"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators7"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators7"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators7"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators7"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators7"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image22}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image23}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image24}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image25}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image26}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">
              Ramadan Umrah Pilgrimage - Concludes in Madinah
            </h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Immersive Experience of The Prophet's Legacy
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">Popular</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 1N . Madinah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Islamabad - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Jeddah - Islamabad
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">Emaar Taiba Hotel</span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Transfer Included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">2 Nights</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">4,198.15</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Eighth Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            id="carouselExampleIndicators8"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={5}
                aria-label="Slide 6"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators8"
                data-bs-slide-to={6}
                aria-label="Slide 7"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image28}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image29}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image30}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image31}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image32}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image33}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image34}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">
              Makkah &amp; Madinah - Departs from Jeddah
            </h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Ziarah Included | Umrah Guide Optional
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">All-inclusive Package</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 1N . Madinah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Islamabad - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Jeddah - Islamabad
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">ibis Styles Makkah</span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  3 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">
                  Artal International Hotel
                </span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Activities and Transfer included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">2 Nights</p>
            <p className="hotel-category text-bold">3 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">4,520.32</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Nineth Package */}
  <div className="container">
    <div className="package-box">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            id="carouselExampleIndicators9"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={3000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={5}
                aria-label="Slide 6"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators9"
                data-bs-slide-to={6}
                aria-label="Slide 7"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image35}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image36}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image37}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image38}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image39}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image40}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image41}
                  className="d-block w-100"
                  alt="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Package Content */}
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="package-content">
            <h3 className="package-title">
              Makkah &amp; Madinah - Luxury Umrah Package
            </h3>
            <div className="row package-items">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-1 text-green mb-2">
                  <i className="fa-regular fa-leaf" />
                  <span className="text-bold">
                    Ziarah Included | Umrah Guide Optional
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <p className="item-2 text-pink">
                  <i className="fa-solid fa-flag" />
                  <span className="text-bold">All-inclusive Package</span>
                </p>
              </div>
            </div>
            <p className="package-days">Makkah 2N . Madinah 1N</p>
            <div className="row">
              <div className="col-lg-12 flex-box">
                <p className="flight-details">
                  <img src="./Assets/departure.png" alt="" />
                  <span className="departure-place text-grey">
                    Lahore - Jeddah
                  </span>
                  <img src="./Assets/Arrival plan'.png" alt="" />
                  <span className="arrival-place text-grey">
                    Madinah - Lahore
                  </span>
                </p>
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  5 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">
                  Raffles Makkah Palace
                </span>
                <p />
              </div>
              <div className="col-lg-12 col-md-12-col-sm-12 flex-box">
                <p className="hotel-details">
                  <img src="./Assets/hotel 1.png" alt="" />
                </p>
                <p className="hotel-class text-bold">
                  5 <i className="fa-solid fa-star" />{" "}
                </p>
                <span className="text-bold text-grey">The Oberoi Madinah</span>
                <p />
              </div>
              <div className="col-lg-12">
                <div className="local-transfer">
                  <p>
                    <img src="./Assets/car 1.png" alt="" />
                    <span className="text-bold text-grey">
                      Activities and Transfer included
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-lg-12 text-start text-bold">
                      <Link to="#" className="uline-0">
                        View More
                      </Link>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Package Price Details */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="package-price-details">
            <div className="p-title">Package Details</div>
            <p className="package-nights text-bold">3 Nights</p>
            <p className="hotel-category text-bold">5 Star Hotel</p>
          </div>
          <div className="package-price-box">
            <div className="total-sum-sr">
              <p className="package-price m-0">7,399.25</p>
              <p className="currency-tag text-green">SAR</p>
            </div>
            <p className="text-bold text-grey m-0">Starting From</p>
            <p className="text-grey">Per person on twin sharing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Packages

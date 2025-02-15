import React from "react";
import "./Hotels.css";
// Importing images which i use in this page
import mapimg from "../Hotels/Assets/map-img.png";
import distanceimg from "./Assets/distance-img.png";
import hotelimg1 from "../Hotels/Assets/Hotel img 01.png";
import hotelimg2 from "../Hotels/Assets/Hotel img 02.png";
import hotelimg3 from "../Hotels/Assets/Hotel img 03.png";
import hotelimg4 from "../Hotels/Assets/Hotel img 04.png";
import hotelimg5 from "../Hotels/Assets/Hotel img 05.png";
import hotelimg6 from "../Hotels/Assets/Hotel img 06.png";
import hotelimg7 from "../Hotels/Assets/Hotel img 07.png";
import hotelimg8 from "../Hotels/Assets/Hotel img 08.png";
import hotelimg9 from "../Hotels/Assets/Hotel img 09.png";
import hotelimg10 from "../Hotels/Assets/Hotel img 10.png";
import hotelimg11 from "../Hotels/Assets/Hotel img 11.png";
import hotelimg12 from "../Hotels/Assets/Hotel img 12.png";
import hotelimg13 from "../Hotels/Assets/Hotel img 13.png";
import hotelimg14 from "../Hotels/Assets/Hotel img 14.png";
import hotelimg15 from "../Hotels/Assets/Hotel img 15.png";
import hotelimg16 from "../Hotels/Assets/Hotel img 16.png";
import hotelimg17 from "../Hotels/Assets/Hotel img 17.png";

function Hotels() {
  return (
    <div>
      <div className="hotels-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="hotel-p-title">Popular Hotels In Makkah</h1>
              <h4 className="text-danger text-bold">
                *04 Best Hotels in Makkah for you*
              </h4>
              <hr />
            </div>
          </div>
          {/* Voco Hotel Code here */}
          <div className="container mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="h-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={hotelimg1} alt="" className="h-image" />
                    </div>
                    <div className="col-lg-5">
                      <div className="h-details">
                        <h3 className="">voco Makkah an IHG Hotel</h3>
                        <p className="hotel-class text-bold">
                          4 <i className="fa-solid fa-star" />{" "}
                        </p>
                        <div className="h-location-details">
                          <p className="h-loaction">
                            <img src={mapimg} alt="" />{" "}
                            <span className="text-bold text-grey">
                              Ibrahim Al Khalil, Makkah, Saudi Arabia
                            </span>
                          </p>
                          <p className="h-distance">
                            <img src={distanceimg} alt="" />
                            <span className="text-bold text-grey">
                              1.81 km from Kaaba (Masjid al-Haram)
                            </span>
                          </p>

                          <p>
                            <span className="text-bold me-1 h-rating-points">
                              8.5
                            </span>
                            <span className="text-bold">
                              Bukhari Travels Rating
                            </span>
                          </p>
                          <div className="h-facilities">
                            <div className="row">
                              <p className="facilities-box col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  8.5
                                </span>
                                <span className="text-grey">Staff</span>
                              </p>
                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="f-points me-2 text-bold">
                                  9.0
                                </span>
                                <span className="text-grey">Facilities</span>
                              </p>

                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  9.0
                                </span>
                                <span className="text-grey">Cleanliness</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 h-price-box">
                      <div className="package-price-box">
                        <div className="total-sum-sr">
                          <p className="package-price m-0">313.99</p>
                          <p className="currency-tag text-green">SAR</p>
                        </div>
                        <p className="text-bold text-grey m-0">Starting From</p>
                        <p className="text-grey">Per room per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Al Kiswah Towers Hotel code here */}
          <div className="container mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="h-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={hotelimg2} alt="" className="h-image" />
                    </div>
                    <div className="col-lg-5">
                      <div className="h-details">
                        <h3 className="">Al Kiswah Towers Hotel</h3>
                        <p className="hotel-class text-bold">
                          3 <i className="fa-solid fa-star" />{" "}
                        </p>
                        <div className="h-location-details">
                          <p className="h-loaction">
                            <img src={mapimg} alt="" />{" "}
                            <span className="text-bold text-grey">
                              At Tayseer Distrit, Makkah, Saudi Arabia
                            </span>
                          </p>
                          <p className="h-distance">
                            <img src={distanceimg} alt="" />
                            <span className="text-bold text-grey">
                              1.51 km from Kaaba (Masjid al-Haram)
                            </span>
                          </p>

                          <p>
                            <span className="text-bold me-1 h-rating-points">
                              7.1
                            </span>
                            <span className="text-bold">
                              Bukhari Travels Rating
                            </span>
                          </p>
                          <div className="h-facilities">
                            <div className="row">
                              <p className="facilities-box col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  6.8
                                </span>
                                <span className="text-grey">Staff</span>
                              </p>
                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="f-points me-2 text-bold">
                                  7.0
                                </span>
                                <span className="text-grey">Facilities</span>
                              </p>

                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  7.0
                                </span>
                                <span className="text-grey">Cleanliness</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 h-price-box">
                      <div className="package-price-box">
                        <div className="total-sum-sr">
                          <p className="package-price m-0">157.92</p>
                          <p className="currency-tag text-green">SAR</p>
                        </div>
                        <p className="text-bold text-grey m-0">Starting From</p>
                        <p className="text-grey">Per room per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="h-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={hotelimg3} alt="" className="h-image" />
                    </div>
                    <div className="col-lg-5">
                      <div className="h-details">
                        <h3 className="">Address Jabal Omar Makkah</h3>
                        <p className="hotel-class text-bold">
                          5 <i className="fa-solid fa-star" />{" "}
                        </p>
                        <div className="h-location-details">
                          <p className="h-loaction">
                            <img src={mapimg} alt="" />{" "}
                            <span className="text-bold text-grey">
                              Ibrahim Al Khalil Rd, Ash Shubaikah, Makkah, Saudi
                              Arabia
                            </span>
                          </p>
                          <p className="h-distance">
                            <img src={distanceimg} alt="" />
                            <span className="text-bold text-grey">
                              0.72 km from Kaaba (Masjid al-Haram)
                            </span>
                          </p>

                          <p>
                            <span className="text-bold me-1 h-rating-points">
                              7.9
                            </span>
                            <span className="text-bold">
                              Bukhari Travels Rating
                            </span>
                          </p>
                          <div className="h-facilities">
                            <div className="row">
                              <p className="facilities-box col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  9.4
                                </span>
                                <span className="text-grey">Staff</span>
                              </p>
                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="f-points me-2 text-bold">
                                  9.4
                                </span>
                                <span className="text-grey">Facilities</span>
                              </p>

                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  9.4
                                </span>
                                <span className="text-grey">Cleanliness</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 h-price-box">
                      <div className="package-price-box">
                        <div className="total-sum-sr">
                          <p className="package-price m-0">1,195.59</p>
                          <p className="currency-tag text-green">SAR</p>
                        </div>
                        <p className="text-bold text-grey m-0">Starting From</p>
                        <p className="text-grey">Per room per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="h-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={hotelimg4} alt="" className="h-image" />
                    </div>
                    <div className="col-lg-5">
                      <div className="h-details">
                        <h3 className="">Emaar Grand Hotel</h3>
                        <p className="hotel-class text-bold">
                          5 <i className="fa-solid fa-star" />{" "}
                        </p>
                        <div className="h-location-details">
                          <p className="h-loaction">
                            <img src={mapimg} alt="" />{" "}
                            <span className="text-bold text-grey">
                              Ibrahim Al Khalil Street., Makkah, Saudi Arabia
                            </span>
                          </p>
                          <p className="h-distance">
                            <img src={distanceimg} alt="" />
                            <span className="text-bold text-grey">
                            1.14 km from Kaaba (Masjid al-Haram)
                            </span>
                          </p>

                          <p>
                            <span className="text-bold me-1 h-rating-points">
                              6.9
                            </span>
                            <span className="text-bold">
                              Bukhari Travels Rating
                            </span>
                          </p>
                          <div className="h-facilities">
                            <div className="row">
                              <p className="facilities-box col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  6.6
                                </span>
                                <span className="text-grey">Staff</span>
                              </p>
                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="f-points me-2 text-bold">
                                  7.6
                                </span>
                                <span className="text-grey">Facilities</span>
                              </p>

                              <p className="col-lg-4 col-md-6 col-sm-12">
                                <span className="me-2 f-points text-bold">
                                  7.4
                                </span>
                                <span className="text-grey">Cleanliness</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 h-price-box">
                      <div className="package-price-box">
                        <div className="total-sum-sr">
                          <p className="package-price m-0">365.72</p>
                          <p className="currency-tag text-green">SAR</p>
                        </div>
                        <p className="text-bold text-grey m-0">Starting From</p>
                        <p className="text-grey">Per room per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;

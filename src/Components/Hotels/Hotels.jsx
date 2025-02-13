import React from "react";
import "../Hotels/Hotels.css";
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
            <div className="col-lg-12">
              <h1 className="hotel-p-title">Popular Hotels In Makkah</h1>
              <h4 className="text-danger text-bold">
                *17 Best Hotels in Makkah for you*
              </h4>
              <hr />
              <div className="hotel-box">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <img src={hotelimg1} alt="Voco Hotel" />
                  </div>
                  <div className="col-lg-5">
                    <div className="h-details ps-4">
                      <h3 className="h-title">voco Makkah an IHG Hotel</h3>
                      <p className="hotel-class text-bold">
                        4 <i className="fa-solid fa-star" />{" "}
                      </p>
                          <div className="row">
                            <div className="col-lg-12">
                              
                            </div>
                          </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
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

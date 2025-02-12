  import React from "react";
  import "../AboutUs.jsx/AboutUs.css";
  import MakkahPic from "./Assets/makkah-3800665_640 1.png";
  import About2Pic from "./Assets/about-2.jpg";
  import About3Pic from "./Assets/about-3.jpg";
  function AboutUs() {
    return (
      <>
          <div className="about-main-page">
         <div className="container">
           <div className="row">
             <div className="overlays">
               <h1 className="page-titles">About Us</h1>
               <div className="container">
                 <div className="row">
                   <div className="col-lg-12">
                     <p className="text-center page-description">
                       At <span className="text-bold">Bukhari Travels</span>, we
                       specialize in providing a seamless and spiritually
                       enriching Umrah and Hajj experience. With well-planned
                       packages, comfortable accommodations, and reliable
                       services, we ensure a hassle-free journey so you can focus
                       on your worship. Let us guide you on this sacred path with
                       care and devotion.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="about-us-main-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-left-content">
          <h3 className="text-brwown">AboutUs</h3>
          <h2 className="about-description">
            Planning a trip should be very exciting adventure
          </h2>
          <p className="about-description2">
            We're dedicated to offering exceptional value for your travel
            investment. Our relationships with trusted travel partners
          </p>
          <div className="booking-steps">
            <div className="step-box">
              <div className="box-icon">
                <i className="fa-regular fa-earth-asia icon-edit" />
              </div>
              <div className="box-content">
                <h4 className="box-title">International Tours</h4>
                <p className="box-description">
                  Our team of travel professional brings a wealth of knowledge
                  and expertise to the table.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="box-icon">
                <i className="fa-solid fa-layer-group icon-edit" />
              </div>
              <div className="box-content">
                <h4 className="box-title">Multiple Options to Choose</h4>
                <p className="box-description">
                  OPlanning trip should be an exciting adventure, not stressful
                  ordeal. Let us handle the logistics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="right-content">
          <div className="row">
            <div className="col-lg-6">
              <img src={About2Pic} alt="" className="about-img" />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={MakkahPic}
                    alt=""
                    className="about-img"
                  />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-9">
                      <img
                        src={About3Pic}
                        alt=""
                        className="about-img"
                      />
                    </div>
                    <div className="col-lg-3" />
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
      </> 
    );
  }

  export default AboutUs;

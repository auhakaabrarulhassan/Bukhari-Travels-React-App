import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input"; // Correct Import
import "react-phone-number-input/style.css";

function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="login-main">
      <div className="container-fluid p-0">
        <div className="row me-0">
          <div className="col-lg-4 col-md-6 col-sm-12 pe-0">
            <div className="login-left-content">
              <div className="overlay1 left-content">
                <h4>Welcome to Bukhari Travels!</h4>
                <p className="text-center">
                  WHAT WAS ONCE A LONG AND TIME-CONSUMING PROCESS COULD BE
                  REDUCED TO A FEW SIMPLE STEPS USING{" "}
                  <span>bukharitravels.netlify.app</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="container">
              <div className="row">
                <div className="login-right-content">
                  <h3 className="text-center login-title">Register</h3>
                  <p className="para">
                    Enter your details to create an account
                  </p>

                  <div className="container">
                    <div className="input-bars">
                      <div className="row">
                        <div className="col-lg-12 col-md-6-col-sm-6 centered-box">
                          <input
                            type="text"
                            required
                            placeholder="First Name *"
                          />
                          <input
                            type="text"
                            required
                            placeholder="Last Name *"
                          />

                          <PhoneInput
                            international
                            defaultCountry="PK"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            placeholder="Enter phone number"
                          />

                          <input
                            type="email"
                            required
                            placeholder="Email Id *"
                          />
                          <input
                            type="password"
                            required
                            placeholder="Password"
                          />
                          <input
                            type="password"
                            required
                            placeholder="Confirm Password"
                          />
                          <p className="mt-2 mb-0">
                            <Link
                              class="btn btn-primary"
                              href="#"
                              role="button"
                            >
                              Register
                            </Link>
                          </p>

                          <div className="links">
                            <div className="register-flex">
                              <p className="register-slogan">
                                Already have an account?
                              </p>
                              <Link
                                to="/login"
                                className="text-decoration-none text-success text-bold"
                              >
                                Login!
                              </Link>
                            </div>
                          </div>

                          <div className="links-flex">
                            <Link
                              to="/aboutus"
                              className="text-decoration-none"
                            >
                              About Us
                            </Link>{" "}
                            |
                            <Link
                              to="/aboutus"
                              className="text-decoration-none"
                            >
                              Terms & Conditions
                            </Link>{" "}
                            |
                            <Link
                              to="/aboutus"
                              className="text-decoration-none"
                            >
                              Disclaimer
                            </Link>{" "}
                            |
                            <Link
                              to="/aboutus"
                              className="text-decoration-none"
                            >
                              Privacy Policy
                            </Link>{" "}
                            |
                            <Link
                              to="/aboutus"
                              className="text-decoration-none"
                            >
                              FAQs
                            </Link>
                          </div>

                          <p className="text-center pt-2">
                            &#xa9; 2025 Copyright Bukhari Travels
                          </p>
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
    </div>
  );
}

export default Register;

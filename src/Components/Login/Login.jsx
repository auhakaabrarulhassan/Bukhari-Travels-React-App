import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register/Register";
function Login() {
  return (
    <div className="login-main">
      <div className="container-fluid p-0">
        <div className="row me-0">
          <div className="col-lg-4 col-md-6 col-sm-12 pe-0">
            <div className="login-left-content">
              <div className="overlay1 left-content">
                <h4>Welcome to Bukhari Travels !</h4>
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
                  <h3 className="text-center login-title">login</h3>
                  <p className="para">Enter your username & password</p>

                  <div className="container">
                    <div className="input-bars">
                      <div className="row">
                      <input
                        type="text"
                        name=""
                        id=""
                        required
                        placeholder="User Name"
                      />
                      <input
                        type="password"
                        name=""
                        id=""
                        required
                        placeholder="Password"
                      />
                      </div>
                      <div className="links">
                        <p>
                          <Link to="#" className="text-decoration-none">
                            Forgot Password?
                          </Link>
                        </p>
                        <p>
                          <Link class="btn btn-primary" href="#" role="button">
                            Login
                          </Link>
                        </p>
                      </div>

                      <div className="register-flex">
                        <p className="register-slogan">
                          Don't have an account yet?
                        </p>
                        <Link to="/Register" className="text-decoration-none text-danger text-bold">
                          Register !
                        </Link>
                      </div>

                      <div className="links-flex">
                        <Link to="/aboutus" className="text-decoration-none">
                          About Us
                        </Link>{" "}
                        |
                        <Link to="#" className="text-decoration-none">
                          Terms & Conditions
                        </Link>{" "}
                        |
                        <Link to="#" className="text-decoration-none">
                          Disclaimer
                        </Link>{" "}
                        |
                        <Link to="#" className="text-decoration-none">
                          Privacy Policy
                        </Link>{" "}
                        |
                        <Link to="#" className="text-decoration-none">
                          FAQs
                        </Link>
                      </div>
                      <p className="text-center pt-2">
                        &#xa9; 2025 Copywrite BukhariTravels
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
  );
}

export default Login;

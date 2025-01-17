import './Header.css';
function Header(){
    return(
        <>
  {/* main navbar */}
  <section>
    {/* Mobile Screen */}
    <input className="navbar-input" type="checkbox" id="menu" />
    {/* End Mobile Screen */}
    <header>
      <div className="logo">
        <div className="bukhari-logo">
          <i className="fa-solid fa-plane plane-icon" />
          <h1>
            BUKHARI<span>TRAVELS</span>
          </h1>
        </div>
      </div>
      {/* Mobile Screen */}
      <label htmlFor="menu">
        <div />
        <div />
        <div />
      </label>
      {/* End Mobile Screen */}
      <nav>
        <a href="#index.html">HOME</a>
        <a href="./_aboutus.html">About Us</a>
        <a href="#Contact Us">Services</a>
        <a href="#Mail Me">Features</a>
        <a href="#Articles">Articles</a>
      </nav>
    </header>
  </section>
</>
    )
}

export default Header;
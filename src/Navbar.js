function Navbar() {
    return (
      <nav className="navbar">
        <img src="images/logo.png" className="brand-logo" alt="" />
          <ul className="nav-links">
            <li className="nav-items"><a href="#">TV</a></li>
            <li className="nav-items"><a href="#">movies</a></li>
            <li className="nav-items"><a href="#">sports</a></li>
            <li className="nav-items"><a href="#">premium</a></li>
          </ul>

          <div className="right-container">
            <input type="text" className="search-box" placeholder="search" />
            <button className="sub-btn">subscribe</button>
            <a href="#" className="login-link">login</a>
          </div>

      </nav>
    );
  }
  export default Navbar;
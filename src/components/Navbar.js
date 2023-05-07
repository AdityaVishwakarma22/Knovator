import React, { useRef } from "react";
import logo from "../assets/logo.png";
import notificaton from "../assets/notification.svg";
import profile from "../assets/profile.svg";
import globe from "../assets/globe lang.svg";
import dropdown from "../assets/dropdown arrow.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    if(navRef.current.classList == "active-mobile-navbar responsive_nav"){
      document.querySelector('body').style.overflow = 'hidden'
    }
    else{
      document.querySelector('body').style.removeProperty("overflow");
    }
	};

  return (
    <div className="main-container header-section">
        <nav className="navbar ">
          <img src={logo} alt="Company logo" id="company-logo" />
          <div>
            <ul className="navbar-items">
              <li>Home</li>
              <li>My Jobs</li>
              <li>
                {/* <img src={notificaton} alt="Notification icon" /> */}
                <i class="fa-regular fa-bell"></i>
              </li>
              <li className="profile">
                <div>
                  {/* <img src={profile} alt="Notification icon" /> */}
                  <i class="fa-regular fa-user"></i>
                  <div className="profile-menu">
                    <ul>
                      <li>Profile</li>
                      <li>Change Password</li>
                      <li style={{color:"red"}}>Sign out</li> 
                    </ul>
                  </div>
                </div>
              </li>
              <li>|</li>
              <li id="employer-link">
                For Employer &nbsp; <i class="fa-solid fa-angle-right"></i>
              </li>
              <li className="lang-box">
                <img src={globe} alt="Globe icon" />
                EN
                <img src={dropdown} alt="Dropdown icon" />
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="mobile-nav">
          <div className="header-mobile-nav">
            <img src={logo} alt="company logo" />
            <div className="hamburger-menu" onClick={showNavbar}><i class="fa fa-bars fa-2x"></i></div>
          </div>
          
          <div className="active-mobile-navbar" ref={navRef}>
            <div className="header-mobile-nav">
              <img src={logo} alt="company logo" />
              <div className="hamburger-menu" onClick={showNavbar}><i class="fa fa-times fa-2x"></i></div>
            </div>
            <ul className="mobile-nav-links">
              <li>Home</li>
              <li>My Jobs</li>
              <li>Notifications</li>
              <li>Profile</li>
              <li id="employer">For Employer &nbsp; <i class="fa-solid fa-angle-right"></i></li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navbar;

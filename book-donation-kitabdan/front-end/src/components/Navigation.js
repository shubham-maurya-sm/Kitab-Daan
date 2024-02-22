import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Logo";

export default function Navigation() {
  return (
    <div>
      <header
        className="d-flex flex-row justify-content-between p-4 mb-0"
        style={{ backgroundColor: "rgb(132 214 204 / 74%)" }}
      >
        <style>
          {`
            .p-4 {
              padding: 0.4rem !important;
  
}

          `}
        </style>
        <Header />
        <nav className="navbar" >
          <ul className="nav justify-content-end ml-auto nav nav-pills" >
            <li className="nav-item header-nav-item">
              <NavLink  to="/" exact className="nav-link" activeClassName="active">
                HOME
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                exact className="nav-link" activeClassName="active"
                to="/Login">
                LOG IN
              </NavLink>
            </li>
            <li className="nav-item dropdown ">
              <NavLink exact className="nav-link" activeClassName="active" to="/SignUp">
                SIGN UP
              </NavLink>
            </li>

            {/* <li className="nav-item header-nav-item ">
              <Link className=" className-contact nav-link" to="/">CONTACT US</Link>
            </li> */}
            <li className="nav-item header-nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/ContactUs">
                CONTACT US
              </NavLink>
            </li>
            {/* <li className="nav-item header-nav-item">
                <Link className="  className-fac nav-link" to="/">DONATION CENTRES</Link>
              </li> */}
            {/* <li className="nav-item header-nav-item">
                <Link className="  className-fac nav-link" to="/DonateForm">DONATE FORM </Link>
              </li> */}
          </ul>
        </nav>
        {/* <div classNameName="side-nav">
        <button classNameName="btn-main"></button>
        
      </div>   */}
      </header>
    </div>
  );
}

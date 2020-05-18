import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from "../images/logoResize.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from './dropdown';


const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
      return (
        <div className="nav-link-wrapper">
          <NavLink exact to={route} activeClassName="nav-link-active">
            {linkText}
          </NavLink>
        </div>
      );
    };

 return (
      <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <div className="logo">
            <NavLink exact to="/">
              <img src={Logo} />
            </NavLink>
          </div>
          
                <div className="nav-links">
                  <NavLink exact to="/" activeClassName="nav-link-active">
                      Home
                  </NavLink>
             
                  <NavLink to="/about" activeClassName="nav-link-active">
                      About
                  </NavLink>
                
                  <NavLink to="/explore" activeClassName="nav-link-active">
                      Explore
                  </NavLink>
                

                  <div className="dropdown-wrapper">
                    <Dropdown  className="dropdown-btn" />
                    {/* <button className="dropdown-btn"> */}
                      {/* <ul className="dd-list">
                        <li className="dd-list-item"></li>
                        <li className="dd-list-item"></li>
                        <li className="dd-list-item"></li>
                      </ul> */}
                    {/* </button> */}
                </div>
              </div>
            </div>
      </div>
  )
}
export default withRouter(NavigationComponent);
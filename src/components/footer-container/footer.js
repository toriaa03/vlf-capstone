import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const FooterComponent = props => {
    const dynamicLink = (route, linkText) => {
      return (
        <div className="footer-link-wrapper">
          <NavLink exact to={route} activeClassName="footer-link-active">
            {linkText}
          </NavLink>
        </div>
      );
    };

 return (
      <div className="footer-wrapper">
              <div className="footer-link-wrapper">
                  <NavLink exact to="/help" activeClassName="footer-link-active">
                      Help
                  </NavLink>

                  <NavLink exact to="/FAQ" activeClassName="footer-link-active">
                      FAQ's
                  </NavLink>

                  <NavLink exact to="/socials" activeClassName="footer-link-active">
                      Follow me!
                  </NavLink>
              </div>

              <div className="copyright-wrapper">
                &copy; 2020 t-swim &#124; All rights reserved       
              </div>
          
      </div>
  )
}
export default withRouter(FooterComponent);
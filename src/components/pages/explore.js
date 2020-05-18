import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MyProfile extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div className="explore-wrapper">
              <div className="input-form">
                <h1>explore other pages</h1>
                    <input 
                    id="input" 
                    type="text" 
                    placeholder="Search"
                     />
                    {/* <FontAwesomeIcon icon="search"/> */}
              </div>
              <div className="trending-wrapper">
                  
              </div>
          </div>
      )
  }
}
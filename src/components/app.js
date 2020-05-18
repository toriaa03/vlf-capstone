import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Icons from "../icons/icons.js";

import Footer from "./footer-container/footer";
import NavContainer from './navigation/nav-container';
import Home from './pages/homepage';
import About from './pages/about';
import Explore from './pages/explore';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';

// ReactDOM.render(
//   <Footer/>,
//   document.querySelector(".footer")
// )


export default class App extends Component {
  render() {
    return (
      <div className='app-container'>  
      <Router>
         <div className="app-wrapper">
          <NavContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/about" component={About} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/register" component={SignUp} />


          </Switch>
          </div>

        </Router>
        {/* <Footer /> */}
      </div>

    );
  }

}
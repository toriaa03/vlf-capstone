import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider-animation/slider';
import Work from "../images/work.jpg";
import Rain from "../images/rain.gif";
import firstSlide from "../images/firstSlide.jpg";
import secondSlide from "../images/secondSlide.jpg";
import thirdSlide from "../images/thirdSlide.jpg";
import fourthSlide from "../images/fourthSlide.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






const images = [
    firstSlide,
    secondSlide,
    thirdSlide,
    fourthSlide
  ]
  

//   document.querySelector('.footer')


export default function() {
    return (
        <div className="homepage-content-wrapper">
            <div className="top-slider">
                <Slider className="slider" slides={images} />
            </div>

            <div className="middle-content">
                    <div className="icons-links">
                        <div className="icons">
                            <div className="icon-captions">
                                <FontAwesomeIcon icon="icons" />
                                <div className="caption">
                                    media
                                </div>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icon-captions">
                                <FontAwesomeIcon icon="pen" />
                                <div className="caption">
                                    create posts
                                </div>
                            </div>
                        </div>

                        <div className="icons">
                            <div className="icon-captions">
                                <FontAwesomeIcon icon="comments" />
                                <div className="icon-caption">
                                    send a message
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="column-wrapper">
                <div className="left-column">
                    <div className="top-squares-wrapper">
                            <div className="top-square-text-wrapper">
                                <div className="title"> 
                                    <h1>Victoria Faletui</h1>
                                    <h2>I might put a logo here instead</h2>
                                </div>
                            </div>

                            <div className="top-square-image-wrapper">
                                <div className="image">
                                    <img src={Work} alt="work" />
                                </div>
                            </div>
                    </div>

                    <div className="bottom-squares-wrapper">
                            <div className="bottom-square-image-wrapper">
                                <div className="image">
                                    <img src={Rain} alt="raingif" />
                                </div>
                            </div>

                            <div className="bottom-square-text-wrapper">
                                <div className="caption">
                                    <h2>Welcome to my homepage</h2>
                                    <p>Here is my homepage. Here is where homepage content needs to go.
                                    Maybe a small summary about myself..or not.
                                    I'll probably put a small summary about this blog site.</p>
                                </div>
                            </div>
                    </div>
                </div>


                <div className="right-column">
                    <div className="input-form">
                        <input
                        type="username, email"
                        name="username, email"
                        placeholder="Username or email"
                        />
                    </div>

                    <div className="input-form">
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        />
                    </div>
                    
                    <div className="homepage-btn">
                        <button className="btn">Log In</button>
                        <button className="btn">Create an account</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
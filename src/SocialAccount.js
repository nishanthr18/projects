import React from "react";
import Tilt from "react-tilt";
import './App.css';

const SocialAccount = () => {
  return (
       <nav>
      <div className="social-links">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="grow  shadow-5">
            <a
              className="insta"
              href="https://www.linkedin.com/in/nishanth-gowda-ab629a18b/"
            >
              LinkedIn
            </a>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="grow  shadow-5">
            <a className="insta" href="https://github.com/nishanthr18">
              github
            </a>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className=" grow  shadow-5">
            <a className="insta" href="https://www.instagram.com/_nish.18_/">
              Instagram
            </a>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="grow  shadow-5">
            <a className="insta" href="https://virtual-face-contact.netlify.app/">
             videochat
            </a>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="grow  shadow-5">
            <a className="insta" href="https://background-generator-io.netlify.app/">
             bg generator
            </a>
          </div>
        </Tilt>
        <div className='mailprops'>
      <div className=" grow shadow-5">
        <a className="mail" href="https://mailcollector.netlify.app/">
          SUBSCRIBE
        </a>
      </div>
        </div>
    </div>
    </nav>
  );
};

export default SocialAccount;

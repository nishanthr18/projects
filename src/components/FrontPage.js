import React from "react";
import "../App.css";

const FrontPage = ({ Title, Description, url, img }) => {
  return (
    <div className=" tc bg-transpareent dib br3 pa3  ma3 bw2  f4 grow  shadow-5">
      <img src={img} alt="img" width='200px' height='150px' />
      <div className='text white fw4'>{Title}</div>
      <div className="description f5 white 1h-copy pa2">{Description}</div>
      <div className="links">
        <a
          className="f5 1h-copy pa2 dim bg-transparent link white hover-bg-animate-slight-blue fw4"
          href={url}
        >
          go to project
        </a>
      </div>
    </div>
  );
};
export default FrontPage;

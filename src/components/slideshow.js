import React, { useState } from "react";
import slide1 from "../pictures/slide1.png";
import slide2 from "../pictures/slide2.png";
import slide3 from "../pictures/slide3.png";
import slide4 from "../pictures/slide4.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";


const slideImages = [slide3, slide2, slide1, slide4];


const getResponsiveStyles = () => {
    const width = window.innerWidth;
  
    const spanStyle = {
      padding: width < 768 ? "10px" : "20px",
      fontSize: width < 768 ? "1rem" : "1.5rem", // Adjust font size based on screen width
      textAlign: "center",
      borderRadius: "0.5rem",
    };
  
    const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: width < 768 ? "30vh" : "100vh", // Adjust height based on screen width
    };
  
    return { spanStyle, divStyle };
  };
function Slideshow() {
    const { spanStyle, divStyle } = getResponsiveStyles();

    return (
        <>
        <div className="slide-container">
        <Slide autoplay={true} duration={3000}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage})`,

                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
        </div>
        </>
    );
}

export default Slideshow
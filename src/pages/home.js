import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Slideshow from "../components/slideshow";
import AboutSection from "../components/aboutSection";

function Home() {
  const aboutSectionRef = useRef(null);

  return (
    <>
      <Navbar aboutSectionRef={aboutSectionRef} />
      <Slideshow />
      <AboutSection ref={aboutSectionRef} />

    </>
  );
}

export default Home;

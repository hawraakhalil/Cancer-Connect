import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import logo1 from "../pictures/logo1.png";
import { useHistory } from "react-router-dom";
import "./navbar.css";

function Navbar({ aboutSectionRef }) {
  const scrollToAbout = () => {
    if (aboutSectionRef && aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToDonate = () => {
    window.location.href = `/donate`;
  };

  const navigateToSignup = () => {
    window.location.href = `/signup`;
  };

  const navigateToAuthentication = () => {
    window.location.href = `/authentication`;
  };

  const navigateToHome = () => {
    window.location.href = `/home`;
  };

  return (
    <>
      <Container fluid="true" className="header-container">
        <img src={logo1} alt="Logo" className="logo" />
        <p className="title">Cancer Connect</p>
        <div className="btn-container">
          <Button onClick={navigateToHome} className="btn">Home</Button>
          <Button onClick={navigateToDonate} className="btn">Donate</Button>
          <Button onClick={scrollToAbout} className="btn">About us</Button>
          <Button onClick={navigateToAuthentication} className="btn">Sign in</Button>
          <Button onClick={navigateToSignup} className="btn">Sign up</Button>
        </div>
      </Container>
    </>
  );
}

export default Navbar;

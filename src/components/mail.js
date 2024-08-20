import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Button from "react-bootstrap/Button";
import news from "../pictures/news.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import "./mail.css"


function Mail() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const otherSectionRef = useRef(null);

  const handleButtonClick = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Clear the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleOtherButtonClick = () => {
    otherSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="other-section" ref={otherSectionRef}>
      <Container fluid="true" className="p-3 container-other-section">
        <div onClick={handleOtherButtonClick} className="icon-container">
          <img
            src={news}
            alt="Logo"
            className="news-image"
          />
          <MailOutlineIcon className="mail-icon" />
        </div>
        <p className="subscription-text">
          Subscribe to our newsletter to get the latest updates
        </p>
        <TextField
          id="standard-required-firstname"
          label="FIRST NAME"
          variant="standard"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          InputLabelProps={{
            className: "text-field-label",
          }}
          InputProps={{
            className: "text-field-input",
          }}
          className="text-field"
        />
        <TextField
          id="standard-required-lastname"
          label="LAST NAME"
          variant="standard"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          InputLabelProps={{
            className: "text-field-label",
          }}
          InputProps={{
            className: "text-field-input",
          }}
          className="text-field"
        />
        <TextField
          id="standard-required-email"
          label="EMAIL ADDRESS"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            className: "text-field-label",
          }}
          InputProps={{
            className: "text-field-input",
          }}
          className="text-field"
        />
        <Button
          onClick={handleButtonClick}
          type="submit"
          className="submit-button"
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}


export default Mail;
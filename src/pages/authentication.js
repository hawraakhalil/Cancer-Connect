import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../pictures/logo1.png";
import "./authentication.css"; // Import the CSS file

function Authentication() {
  // Variables that will be used
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Call the function that checks if username and password are in the database to allow entry
  const handleClick = async () => {
    try {
      if (username && password) {
        const response = await fetch(
          "https://lxjqnqbscvxcu4hgxv7b3lagf40qqmdz.lambda-url.eu-north-1.on.aws/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        );
        if (response.ok) {
          const user = encodeURIComponent(username);
          window.location.href = `/feed?user=${user}`;
        } else if (response.status === 404) {
          const data = await response.json();
          console.error(data.message);
          setErrorMessage(data.message);
        } else {
          const data = await response.json();
          console.error(data.message);
        }
      } else if (!username && !password) {
        setErrorMessage("Please enter a username and password.");
      } else if (!username && password) {
        setErrorMessage("Please enter a username.");
      } else if (username && !password) {
        setErrorMessage("Please enter a password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <Container className="auth-container">
        <Card className="auth-card">
          <img
            src={logo1}
            alt="Logo"
            className="auth-logo"
          />
          <Card.Body className="auth-card-body">
            <Card.Header className="auth-card-header">
              Cancer Connect
            </Card.Header>
            <div className="auth-form-container">
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="auth-form-control"
                onKeyDown={handleKeyDown}
              />
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="auth-form-control"
                onKeyDown={handleKeyDown}
              />
              <Link to="/" className="auth-forgot-password">
                forgot password?
              </Link>
              <Button onClick={handleClick} className="auth-button">
                Login
              </Button>
              <p className="auth-signup-text">
                Don't have an account? Create a new one&nbsp;
                <Link to="/signup" className="auth-signup-link">
                  here
                </Link>
                .
              </p>
              {errorMessage && (
                <p className="auth-error-message">
                  {errorMessage}
                </p>
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Authentication;

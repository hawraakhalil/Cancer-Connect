import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Container from "@mui/material/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordChecklist from "react-password-checklist";

function SignUp() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    Phone_Number: "",
    Day: "",
    Month: "",
    Year: "",
    areaCode: "",
    Badge: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //sends user info to create acc
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!formData.First_name) {
        setErrorMessage("Please enter your first name.");
      } else if (!formData.Last_name) {
        setErrorMessage("Please enter your last name.");
      } else if (!formData.email) {
        setErrorMessage("Please enter your email.");
      } else if (!formData.Day) {
        setErrorMessage("Please enter your date of birth.");
      } else if (!formData.Month) {
        setErrorMessage("Please enter your date of birth..");
      } else if (!formData.Year) {
        setErrorMessage("Please enter your date of birth..");
      } else if (!formData.Phone_Number) {
        setErrorMessage("Please enter your phone number.");
      } else if (!formData.username) {
        setErrorMessage("Please enter your username.");
      } else if (!formData.password) {
        setErrorMessage("Please enter your password.");
      } else if (!formData.confirm_password) {
        setErrorMessage("Please confirm your password.");
      } else {
        const response = await fetch(
          "https://a4e2anamv5ahwizphoxjhovgxa0ojbot.lambda-url.eu-north-1.on.aws/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // Handle successful API response
          const user = encodeURIComponent(formData.username);
          window.location.href = `/avatar?user=${user}`;
          console.log("API request successful");
        } else {
          // Handle error API response
          const data = await response.json();
          console.error(data.message);
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <style>{"body { background-color: #FFFFE0; }"}</style>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Card
            style={{
              width: "37rem",
              height: "42rem",
              backgroundColor: "#0F52BA",
              borderRadius: "5rem",
            }}
          >
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
              <Form.Control
                type="text"
                placeholder="  First Name"
                name="First_name"
                value={formData.First_name}
                onChange={handleInputChange}
                style={{
                  marginLeft: "2rem",
                  marginTop: "2.2rem",
                  width: "12rem",
                  height: "2.8rem",
                  borderColor: "#FFFFFF",
                  borderRadius: "1.5rem",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginRight: "0.9rem",
                  paddingLeft: "1rem",
                }}
              />
              <Form.Control
                type="text"
                placeholder="  Last Name"
                name="Last_name"
                value={formData.Last_name}
                onChange={handleInputChange}
                style={{
                  width: "17.3rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "2.2rem",
                  paddingLeft: "1rem",
                }}
              />
            </Card.Body>
            <Card.Body>
              <Form.Control
                type="email"
                placeholder="  Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  paddingLeft: "1rem",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  width: "31.5rem",
                  height: "2.8rem",
                  borderColor: "#FFFFFF",
                  borderRadius: "1.5rem",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginRight: "1.2rem",
                }}
              />
            </Card.Body>
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "30px" }}>
                <PhoneInput
                  type="text"
                  placeholder="  Area Code"
                  name="areaCode"
                  country={"lb"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "10rem",
                    borderRadius: "2rem",
                    height: "3.1rem",
                    paddingLeft: "3.8rem",
                  }}
                  buttonStyle={{ paddingLeft: "0.5rem" }}
                  containerStyle={{ width: "1rem" }}
                  style={{
                    paddingLeft: "1rem",
                    marginLeft: "1rem",
                    borderColor: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    marginTop: "1rem",
                    marginRight: "-27rem",
                  }}
                />
              </div>
              <Form.Control
                type="tel"
                placeholder="  Phone Number"
                name="Phone_Number"
                value={formData.Phone_Number}
                onChange={handleInputChange}
                style={{
                  paddingLeft: "1rem",
                  marginLeft: "11.6rem",
                  width: "20rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "1rem",
                }}
              />
            </Card.Body>
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
              <select
                id="Day"
                name="Day"
                value={formData.Day}
                onChange={handleInputChange}
                style={{
                  marginLeft: "2rem",
                  width: "10rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "1rem",
                  paddingLeft: "4rem",
                }}
              >
                <option value="" disabled selected>
                  Day
                </option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
                {/* Generate day options dynamically using JavaScript */}
              </select>
              <select
                id="Month"
                name="Month"
                value={formData.Month}
                onChange={handleInputChange}
                style={{
                  marginLeft: "1rem",
                  width: "12rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "1rem",
                  paddingLeft: "3.8rem",
                }}
              >
                <option value="" disabled selected>
                  Month
                </option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option key={index + 1} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                id="Year"
                name="Year"
                value={formData.Year}
                onChange={handleInputChange}
                style={{
                  marginLeft: "1rem",
                  width: "8.7rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "1rem",
                  paddingLeft: "2.8rem",
                }}
              >
                <option value="" disabled selected>
                  {" "}
                  Year
                </option>
                {Array.from({ length: 104 }, (_, i) => (
                  <option key={i} value={2023 - i}>
                    {2023 - i}
                  </option>
                ))}
              </select>
            </Card.Body>
            <Card.Body>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Control
                  type="text"
                  placeholder="  Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  style={{
                    paddingLeft: "1rem",
                    marginLeft: "2rem",
                    width: "14rem",
                    height: "2.8rem",
                    borderRadius: "1.5rem",
                    borderColor: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    marginTop: "1rem",
                  }}
                />
                <select
                  id="Badge"
                  name="Badge"
                  value={formData.Badge}
                  onChange={handleInputChange}
                  style={{
                    marginLeft: "2rem",
                    width: "15rem",
                    height: "3rem",
                    borderRadius: "1.5rem",
                    borderColor: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    marginTop: "1rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {" "}
                  <option value="" disabled selected>
                    I am a
                  </option>
                  {[
                    "Cancer Patient",
                    "Cancer Survivor",
                    "Family member or friend",
                    "Health Professional",
                  ].map((month, index) => (
                    <option key={index + 1} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <Form.Control
                type="password"
                placeholder="  Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  paddingLeft: "1rem",
                  marginLeft: "2rem",
                  width: "31.5rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "1rem",
                }}
              />

              <Form.Control
                type="password"
                placeholder="  Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                style={{
                  paddingLeft: "1rem",
                  marginLeft: "2rem",
                  width: "31.5rem",
                  height: "2.8rem",
                  borderRadius: "1.5rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  marginTop: "0.9rem",
                  marginBottom: "-8rem",
                }}
              />
            </Card.Body>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", marginBottom: "1.5rem" }}>
                <div style={{ marginRight: "0.5rem" }}>
                  <PasswordChecklist
                    rules={[
                      "capital",
                      "specialChar",
                      "number",
                      "minLength",
                      "match",
                    ]}
                    minLength={7}
                    value={formData.password}
                    valueAgain={formData.confirm_password}
                    style={{
                      fontSize: "0.9rem",
                      marginLeft: "0.1rem",
                      fontWeight: "bold",
                      marginTop: "2.5rem",
                      marginRight: "1rem",
                      color: "#000000",
                    }}
                    iconSize="17"
                  />
                </div>
                <div>
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    style={{
                      cursor: "pointer",
                      marginTop: "3.7rem",
                      width: "14rem",
                      height: "5rem",
                      backgroundColor: "#FADA5E",
                      borderColor: "#FADA5E",
                      borderRadius: "2.3rem",
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
              {errorMessage && (
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "-2rem",
                    marginLeft: "18rem",
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;

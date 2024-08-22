import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Container from "@mui/material/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordChecklist from "react-password-checklist";
import './signup.css';

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
          const user = encodeURIComponent(formData.username);
          window.location.href = `/avatar?user=${user}`;
          console.log("API request successful");
        } else {
          const data = await response.json();
          console.error(data.message);
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container className="container-reg">
        <Form onSubmit={handleSubmit}>
          <Card className="card-reg">
            <Card.Body className="card-body-reg">
              <Form.Control
                type="text"
                placeholder="  First Name"
                name="First_name"
                value={formData.First_name}
                onChange={handleInputChange}
                className="form-control-reg input-field-reg first-name-reg"
              />
              <Form.Control
                type="text"
                placeholder="  Last Name"
                name="Last_name"
                value={formData.Last_name}
                onChange={handleInputChange}
                className="form-control-reg input-field-reg last-name-reg"
              />
            </Card.Body>
            <Card.Body>
              <Form.Control
                type="email"
                placeholder="  Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control-reg email-reg input-field-reg"
              />
            </Card.Body>
            <Card.Body className="card-body-reg ">
              <div>
                <PhoneInput
                  type="text"
                  placeholder="  Area Code"
                  name="areaCode"
                  country={"lb"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{ width: "10rem", borderRadius: "2rem", height: "2rem", paddingLeft: "3.8rem" }}
                  buttonStyle={{ paddingLeft: "0.5rem" }}
                  containerStyle={{ width: "1rem" }}
                  style={{ paddingLeft: "1rem", marginLeft: "1rem", borderColor: "#FFFFFF", fontFamily: "Lato", fontSize: "0.95rem", marginRight: "-3rem" }}
                />
              </div>
              <Form.Control
                type="tel"
                placeholder="  Phone Number"
                name="Phone_Number"
                value={formData.Phone_Number}
                onChange={handleInputChange}
                className="form-control-reg phone-number-reg input-field-reg"
              />
            </Card.Body>
            <Card.Body className="card-body-reg">
              <select
                id="Day"
                name="Day"
                value={formData.Day}
                onChange={handleInputChange}
                className="select-reg day-reg input-field-reg"
              >
                <option value="" disabled selected>
                  Day
                </option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                id="Month"
                name="Month"
                value={formData.Month}
                onChange={handleInputChange}
                className="select-reg month-reg input-field-reg"
              >
                <option value="" disabled selected>
                  Month
                </option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("en-US", { month: "short" })}
                  </option>
                ))}
              </select>
              <select
                id="Year"
                name="Year"
                value={formData.Year}
                onChange={handleInputChange}
                className="select-reg year-reg input-field-reg"
              >
                <option value="" disabled selected>
                  Year
                </option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1920} value={i + 1920}>
                    {i + 1920}
                  </option>
                ))}
              </select>
            </Card.Body>
            <Card.Body>
              <Form.Control
                type="text"
                placeholder="  Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-control-reg input-field-reg username-reg"
              />
            </Card.Body>
            <select
                  id="Badge"
                  name="Badge"
                  value={formData.Badge}
                  onChange={handleInputChange}
 className="form-control-reg input-field-reg username-reg"
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
            <Card.Body>
              <Form.Control
                type="password"
                placeholder="  Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control-reg input-field-reg password-reg"
              />
            </Card.Body>
            <Card.Body>
              <Form.Control
                type="password"
                placeholder="  Confirm Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                className="form-control-reg input-field-reg confirm-password-reg"
              />
            </Card.Body>
            <div className="horizbutton">
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={8}
                value={formData.password}
                valueAgain={formData.confirm_password}
                className="password-checklist-reg"
              />
            <Card.Body>
              <Button type="submit" className="button-reg">
                Register
              </Button>
            </Card.Body>
            </div>
            <Card.Body>
              {errorMessage && <p className="error-message-reg">{errorMessage}</p>}
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;

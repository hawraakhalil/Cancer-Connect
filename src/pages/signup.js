import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


function SignUp () {
  
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    username: "",
    password: "",
    confirm_password:"",
    email : "",
    DOB: "",
    Phone_Number: "",
    day:"",
    month:"",
    year:"",
    areaCode:"",

  });
  const [errorMessage, setErrorMessage] = useState('');

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //call the function to store the input entered
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (!formData.First_name ) {setErrorMessage('Please enter your first name.');}
      else if (!formData.Last_name ) {setErrorMessage('Please enter your last name.');}
      else if (!formData.email ) {setErrorMessage('Please enter your email.');}
      else if (!formData.areaCode ) {setErrorMessage('Please enter your area code.');}
      else if (!formData.day ) {setErrorMessage('Please enter your date of birth.');}
      else if (!formData.month ) {setErrorMessage('Please enter your date of birth..');}
      else if (!formData.year ) {setErrorMessage('Please enter your date of birth..');}
      else if (!formData.Phone_Number ) {setErrorMessage('Please enter your phone number.');}
      else if (!formData.username ) {setErrorMessage('Please enter your username.');}
      else if (!formData.password ) {setErrorMessage('Please enter your password.');}
      else if (!formData.confirm_password ) {setErrorMessage('Please confirm your password.');}

  
      else {
      const response = await fetch("https://a4e2anamv5ahwizphoxjhovgxa0ojbot.lambda-url.eu-north-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Handle successful API response
        window.location.href = '/feed';
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
    
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Form onSubmit={handleSubmit}>

        <Card style={{ width: '37rem',height:"42rem", backgroundColor:"#A4D6D3" ,borderRadius:"5rem"}}>
        <Card.Body style={{ display: "flex", alignItems: "center" }} >
        <Form.Control
        type="text"
        placeholder="  First Name" 
        name="First_name"
        value={formData.First_name}
        onChange={handleInputChange}
        style={{marginLeft:"2rem",marginTop:"2.2rem",width:"12rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginRight:"0.9rem",paddingLeft:"1rem"}}
      />
      <Form.Control
        type="text"
        placeholder="  Last Name"
        name="Last_name"
        value={formData.Last_name}
        onChange={handleInputChange}
        style ={{ width:"17.3rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"2.2rem",paddingLeft:"1rem"}}

      />
        </Card.Body>
        <Card.Body>
        <Form.Control
        type="email"
        placeholder="  Email Address" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        style={{paddingLeft:"1rem",marginLeft:"2rem",marginTop:"1rem",width:"31.5rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginRight:"1.2rem"}}
      />
      </Card.Body>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
      <Form.Control
        type="text"
        placeholder="  Area Code"
        name="areaCode"
        value={formData.areaCode}
        onChange={handleInputChange}
        style ={{ paddingLeft:"1rem",marginLeft:"2rem",width:"10rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
       <Form.Control
        type="tel"
        placeholder="  Phone Number"
        name="Phone_Number"
        value={formData.Phone_Number}
        onChange={handleInputChange}
        style ={{paddingLeft:"1rem", marginLeft:"1rem",width:"19.2rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
      </Card.Body>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
      <select
    id="day"
    name="day"
    value={formData.day}
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
      paddingLeft:"4rem",
    }}
  >
    <option value="" disabled selected >Day</option>
    {Array.from({ length: 31 }, (_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
    {/* Generate day options dynamically using JavaScript */}
  </select>
  <select
    id="month"
    name="month"
    value={formData.month}
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
      paddingLeft:"3.8rem",
    }}
  >
        <option value="" disabled selected>
    Month
    </option>
{[
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ].map((month, index) => (
      <option key={index + 1} value={index + 1}>
        {month}
      </option>
    ))}
  </select>

  <select
    id="year"
    name="year"
    value={formData.year}
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
      paddingLeft:"2.8rem",
    }}
  >
    <option value="" disabled selected> Year</option>
    {Array.from({ length: 104 }, (_, i) => (
      <option key={i} value={1920 + i}>{1920 + i}</option>
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
        style ={{ paddingLeft:"1rem",marginLeft:"2rem",width:"13rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
       <Form.Control
        type="password"
        placeholder="  Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        style ={{paddingLeft:"1rem", marginLeft:"2rem",width:"31.5rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
        <Form.Control
        type="password"
        placeholder="  Confirm Password"
        name="confirm_password"
        value={formData.confirm_password}
        onChange={handleInputChange}
        style ={{paddingLeft:"1rem", marginLeft:"2rem",width:"31.5rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
      <h1 style={{color:"black", paddingLeft:"6rem",paddingRight:"6rem",marginBottom:"-5rem", fontSize:"0.9rem",textAlign: 'center',marginTop:'0.75rem' }}>Your password must include at least 8 characters, and of which at least one has to be a lowercase letter, one uppercase letter, a number, and a special character. </h1>
       <Button onClick={handleSubmit} type="submit" style ={{marginTop:"5.5rem",marginLeft:"11rem",width:"14rem",height:"5rem",backgroundColor:"#FFE3F4",borderColor:"#FFE3F4",borderRadius:"2.3rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Create Account</Button>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "0.4rem"}}>
       {errorMessage && <p style ={{fontSize:"0.9rem",marginTop:"0rem"}}>{errorMessage}</p>}
       </div>
      </Card.Body>
      </Card>
      </Form>
      </Container>
      
          </>
    );

}

export default SignUp;
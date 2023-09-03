import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


function SignUp () {


    return (
        <>
    
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card style={{ width: '37rem',height:"39rem", backgroundColor:"#A4D6D3" ,borderRadius:"5rem"}}>
        <Card.Body style={{ display: "flex", alignItems: "center" }} >
        <Form.Control
        type="text"
        placeholder="      First Name" 
        style={{marginLeft:"2rem",marginTop:"3rem",width:"12rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginRight:"0.9rem",paddingLeft:"1rem"}}
      />
      <Form.Control
        type="text"
        placeholder="      Last Name"
        style ={{ width:"17.3rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"3rem",paddingLeft:"1rem"}}

      />
        </Card.Body>
        <Card.Body>
        <Form.Control
        type="email"
        placeholder="      Email Address" 
        style={{paddingLeft:"1rem",marginLeft:"2rem",marginTop:"1rem",width:"31.5rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginRight:"1.2rem"}}
      />
      </Card.Body>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
      <Form.Control
        type="text"
        placeholder="      Area Code"
        style ={{ paddingLeft:"1rem",marginLeft:"2rem",width:"10rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
       <Form.Control
        type="tel"
        placeholder="      Phone Number"
        style ={{paddingLeft:"1rem", marginLeft:"1rem",width:"19.2rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
      </Card.Body>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
      <select
    id="day"
    name="day"
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
        placeholder="      Username"
        style ={{ paddingLeft:"1rem",marginLeft:"2rem",width:"13rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
       <Form.Control
        type="password"
        placeholder="      Password"
        style ={{paddingLeft:"1rem", marginLeft:"2rem",width:"31.5rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
        <Form.Control
        type="password"
        placeholder="      Confirm Password"
        style ={{paddingLeft:"1rem", marginLeft:"2rem",width:"31.5rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
      />
       <Button  style ={{marginTop:"1.5rem",marginLeft:"11rem",width:"14rem",height:"5rem",backgroundColor:"#FFE3F4",borderColor:"#FFE3F4",borderRadius:"2.3rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.9rem"}}>Create Account</Button>
      </Card.Body>
      </Card>

      </Container>
      
          </>
    );

}
export default SignUp;
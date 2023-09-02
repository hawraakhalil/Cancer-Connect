import React from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form';

function SignUp () {
    return (
        <>
    
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card style={{ width: '37rem',height:"39rem", backgroundColor:"#A4D6D3" ,borderRadius:"5rem"}}>
        <Card.Body style={{ display: "flex", alignItems: "center" }} >
        <Form.Control
        type="text"
        placeholder="      First Name" 
        style={{marginLeft:"2rem",marginTop:"3rem",width:"13rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginRight:"1.2rem"}}
      />
      <Form.Control
        type="text"
        placeholder="      Last Name"
        style ={{ width:"17rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginTop:"3rem"}}

      />
        </Card.Body>
        <Card.Body>
        <Form.Control
        type="email"
        placeholder="      Email Address" 
        style={{marginLeft:"2rem",marginTop:"1rem",width:"31.5rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginRight:"1.2rem"}}
      />
      </Card.Body>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
      <Form.Control
        type="text"
        placeholder="      Area Code"
        style ={{ marginLeft:"2rem",width:"10rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginTop:"1rem"}}

      />
       <Form.Control
        type="text"
        placeholder="      Phone Number"
        style ={{ marginLeft:"1.5rem",width:"19.5rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginTop:"1rem"}}

      />
        </Card.Body>
      </Card>
      </Container>
          </>
    );

}
export default SignUp;
import React, { useState, useContext } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import images from './images.png';





function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //call the function that checks if username and password are in the database
  const handleClick = async () => {
    try {
    if (username && password) {
      const response = await fetch('https://lxjqnqbscvxcu4hgxv7b3lagf40qqmdz.lambda-url.eu-north-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
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
      setErrorMessage('Please enter a username and password.');
    } else if (!username && password) {
      setErrorMessage('Please enter a username.');
    } else if (username && !password) {
      setErrorMessage('Please enter a password.');
    }
  } catch (error) {
    console.error('Error:', error);

  }
};
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    handleClick();
  }
};
    return (
      <>
       <style>{'body { background-color: #FFF0F9; }'}</style>
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"   }}>
      <Card style={{ width: '35rem',height:"33rem", backgroundColor:"#A4D6D3" ,borderRadius:"5rem"}}>
      <img src={images} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "8rem", width: "8rem",marginLeft:"38%",marginTop:"1rem"}} />
      <Card.Body style ={{marginTop:"-11rem"}}>
      <Card.Header as="h5" style={{ fontFamily: 'Quicksand',color: '#155A56', position: 'relative', top: '10rem', left: '9.5rem',fontSize:"3.5rem" ,fontWeight: "700" ,marginTop:"0.9rem"}}>Welcome!</Card.Header>
      <div style={{ margin: "21% auto", width: "20rem" }}>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="  Username" 
        style={{paddingLeft:"1rem",marginTop:"20%",width:"25rem",height:"3rem",marginBottom:"0.7rem",borderColor:"#FFFFFF",borderRadius:"2rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginLeft:"-3rem"}}
        onKeyDown={handleKeyDown}
      />
    
    <Form.Control
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="  Password"
        style ={{ paddingLeft:"1rem",width:"25rem",height:"3rem",borderRadius:"2rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontWeight:"bold",fontSize:"0.95rem",marginLeft:"-3rem"}}
        onKeyDown={handleKeyDown}
      />
      <Link to="/password" style={{ color: '#155A56', textDecoration: 'underline',fontSize:"0.88rem" ,fontFamily:"Lato",display: "flex", justifyContent: "center",marginTop:"0.8rem",fontWeight:"bold", fontStyle: "italic"}}> forgot password?</Link>
      <Button onClick={handleClick} style ={{marginTop:"0.8rem",marginLeft:"5rem",width:"10rem",height:"3.5rem",backgroundColor:"#FFE3F4",borderColor:"#FFE3F4",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold"}}>Login</Button>
      
      <p style={{ fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' ,marginBottom:'0.4rem'}}>
        Don't have an account? Create a new one&nbsp;   
        <Link to="/signup" style={{ color: '#FF00FF', textDecoration: 'underline' }}>here</Link>.
      </p>
      {errorMessage && <p style ={{fontSize:"0.9rem",marginTop:"0.1rem",textAlign: 'center'}}>{errorMessage}</p>}
      </div>
      </Card.Body>
    </Card>
    </Container>
        </>
    );
}
 
export default Authentication;
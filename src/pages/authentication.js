import React,{useState} from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import images from './images.png';

const handleClick = () => {
    window.location.href = "/feed";
  };

function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    return (
        <>
    <Container>
      <Card style={{ width: '35rem',height:"28rem", backgroundColor:"#A4D6D3" , marginLeft:"31%", marginTop:"8%", borderRadius:"5rem"}}>
      <img src={images} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "8rem", width: "8rem",marginLeft:"38%",marginTop:"1rem"}} />
      <Card.Body style ={{marginTop:"-11rem"}}>
      <Card.Header as="h5" style={{ fontFamily: 'Quicksand',color: '#155A56', position: 'relative', top: '11rem', left: '11rem',fontSize:"2.7rem" ,fontWeight: "700" ,marginTop:"1rem"}}>Welcome!</Card.Header>
      <div>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="        Username" 
        style={{marginTop:"20%",marginLeft:"20%",width:"20rem",height:"2.8rem",marginBottom:"0.5rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontWeight:"bold"}}
      />
      </div>
      <div>
      <Form.Control
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="       Password"
        style ={{marginLeft:"20%", width:"20rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontWeight:"bold"}}
      />
      <Button onClick={handleClick} style ={{marginTop:"1.5rem",marginLeft:"13.5rem",width:"8rem",height:"3rem",backgroundColor:"#FFE3F4",borderColor:"#FFE3F4",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold"}}>Login</Button>
      </div>
      
      </Card.Body>
    </Card>
    </Container>
        </>
    );
}
 
export default Authentication;
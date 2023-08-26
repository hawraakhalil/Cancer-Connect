import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const handleClick = () => {
    window.location.href = "/feed";
  };

function Authentication() {
    return (
        <>
    <Container>
      <Card style={{ width: '35rem',height:"28rem", backgroundColor:"#A4D6D3" , marginLeft:"31%", marginTop:"8%", borderRadius:"5rem"}}>
      <Card.Body>
      <Card.Header as="h5" style={{ fontFamily: 'Quicksand',color: '#155A56', position: 'relative', top: '11rem', left: '11rem',fontSize:"2.7rem" ,fontWeight: "800" }}>Welcome!</Card.Header>
        <Button onClick={handleClick} style ={{marginTop:"10rem",marginLeft:"12rem"}}>Go to Feed here for now</Button>
      </Card.Body>
    </Card>
    </Container>
        </>
    );
}
 
export default Authentication;
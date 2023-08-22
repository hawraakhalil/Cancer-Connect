import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from 'react-bootstrap/Card'  
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'


const posts = [
  {
    title:"Post title #1",
    subtitle: "Post Preview",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Post title #2",
    subtitle: "Another Post Preview",
    content: "This is another example post content."
  }
];

function App() {
  return (

<Container>
{posts.map((post, index) => (
<Card key={index} className="mt-4" style={{ maxWidth: "90rem", backgroundColor: "lightblue" }}>
  <Card.Body>
    <div className="row">
      <div className="col-sm-6">
        <h1 className="card-title">{post.title}</h1>
        <h6 className="card-subtitle mb-2 text-muted">{post.subtitle}</h6>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  </Card.Body>
</Card>
))}
</Container>
     
  );
}

export default App;

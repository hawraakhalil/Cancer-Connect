import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SendIcon from '@mui/icons-material/Send'; 


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
<body>
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
<footer>
<Container style={{ maxWidth: "100rem", backgroundColor: "lightblue" }}>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Control type="text" style={{ width: "80%" }} placeholder="New Post Title Here" />
        
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" style={{ width: "80%" }}  placeholder="New Post Message Here" rows={10} />
      </Form.Group>
      <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </Form>
  </Container>
</footer>

</body>
  );
}

export default App;

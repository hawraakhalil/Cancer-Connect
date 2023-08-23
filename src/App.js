import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'; 
import SearchIcon from '@mui/icons-material/Search';
import images from './images.png';


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
  },
  {
    title: "Post title #3",
    subtitle: "Another Post Preview",
    content: "This is another example post content."
  }
];

function App() {
  return (
<>

<header>
<Container style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
<img src={images} alt="Logo" className="rounded-circle" style={{ borderRadius: "50%",height: "9.7rem", width: "9.7rem",marginLeft:"1.9rem",marginTop:"0.5rem" }} />
<TextField 

        id="search"
        variant="outlined"
        placeholder="  Search" 
        InputProps={{
          startAdornment: <SearchIcon style={{ color: "#4EA4F3" }} />,
          style: { borderRadius: "50rem" } , 
          inputProps: { style: { color: "#4EA4F3" ,fontSize: "1.15rem"} } }}
          style={{width:"62rem", marginTop:"1.2rem", marginLeft:"3.5rem",backgroundColor:"white",borderRadius: "50rem", borderColor: "white"}}
          
      />
            <Button style={{height:"3.3rem",width:"8.2rem",marginLeft:"4rem", borderRadius:"50rem",borderColor:"#A4D6D3",   position: "relative", top: "-6.95rem", color: "#4EA4F3",backgroundColor:"white",fontWeight:"bold"}}> 
       View Account
       </Button>
</Container>
</header>


<Container style={{marginTop:"3rem", marginBottom: "3rem"}}>
{posts.map((post, index) => (
<Card key={index} className="mt-4" style={{marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#D7ECEC",borderRadius:"2rem" }}>
  <Card.Body>
    <div className="row">
      <div className="col-sm-6">
        <h1 className="card-title" style={{ marginTop: "2rem",marginLeft: "2rem",marginBottom:"0.7rem"}}>{post.title}</h1>
        <h6 className="card-subtitle mb-2 text-muted"  style={{marginTop: "0",marginLeft: "2rem" ,marginBottom: "7.5rem"}} >{post.subtitle}</h6>
        <p className="card-text" style= {{marginLeft: "2rem"}}>{post.content}</p>
      </div>
    </div>
  </Card.Body>
</Card>
))}
</Container>
<footer>
<Container style={{ maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
<div>
<Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Control type="text" style={{ width: "71.6rem",marginTop: "1rem",marginLeft: "7rem",marginRight:"5rem",height:"2.5rem",fontSize: "1rem" }} placeholder="       New Post Title Here" />
        
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" style={{ width: "71.6rem",marginLeft: "7rem",marginRight:"5rem",height:"6.5rem" ,fontSize: "1rem"}}  placeholder="   New Post Message Here"  />
       <Button style={{ marginTop: "-100rem" , marginBottom:"1rem" ,height:"7.6rem",width:"9.3rem",marginLeft:"-3rem", borderRadius:"2rem",borderColor:"#A4D6D3",backgroundColor:"white"}}> 
       <SendIcon style={{height:"7.3rem",width:"5.3rem",color: "#A4D6D3" ,marginLeft:"1rem"}}> </SendIcon>
       </Button>
      </Form.Group>
    </Form>
    </div>
  </Container>
</footer>

</>
  );
}

export default App;

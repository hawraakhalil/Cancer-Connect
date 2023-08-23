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
<body>

<header>
<Container style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
<img src={images} alt="Logo" className="rounded-circle" style={{ borderRadius: "50%",height: "9.7rem", width: "9.7rem",marginLeft:"30px",marginTop:"7px" }} />
<TextField 

        id="search"
        variant="outlined"
        placeholder="  Search" 
        InputProps={{
          startAdornment: <SearchIcon style={{ color: "#4EA4F3" }} />,
          style: { borderRadius: "30px" } , 
          inputProps: { style: { color: "#4EA4F3" ,fontSize: "18px"} } }}
          style={{width:"62rem", marginTop:"20px", marginLeft:"60px",backgroundColor:"white",borderRadius: "30px", borderColor: "white"}}
          
      />
            <Button style={{height:"50px",width:"130px",marginLeft:"4%", borderRadius:"30px",borderColor:"#A4D6D3",   position: "relative", top: "-110px", color: "#4EA4F3",backgroundColor:"white",fontWeight:"bold"}}> 
       View Account
       </Button>
</Container>
</header>


<Container style={{marginTop:"50px", marginBottom: "50px"}}>
{posts.map((post, index) => (
<Card key={index} className="mt-4" style={{marginLeft:"100px",marginRight:"100px", backgroundColor: "#D7ECEC",borderRadius:"30px" }}>
  <Card.Body>
    <div className="row">
      <div className="col-sm-6">
        <h1 className="card-title" style={{ marginTop: "30px",marginLeft: "25px",marginBottom:"5px"}}>{post.title}</h1>
        <h6 className="card-subtitle mb-2 text-muted"  style={{marginTop: "0",marginLeft: "25px" ,marginBottom: "120px"}} >{post.subtitle}</h6>
        <p className="card-text" style= {{marginLeft: "25px"}}>{post.content}</p>
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

        <Form.Control type="text" style={{ width: "78%",marginTop: "1%",marginLeft: "7.5%",marginRight:"5%",height:"40px",fontSize: "15px" }} placeholder="       New Post Title Here" />
        
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" style={{ width: "78%",marginLeft: "7.5%",marginRight:"5%",height:"100px" ,fontSize: "15px"}}  placeholder="    New Post Message Here"  />
       <Button style={{ marginTop: "-100%" , marginBottom:"1%" ,marginTop:"-50px",height:"120px",width:"140px",marginLeft:"-3%", borderRadius:"30px",borderColor:"#A4D6D3",backgroundColor:"white"}}> 
       <SendIcon style={{height:"120px",width:"75px",color: "#A4D6D3" ,marginLeft:"5px"}}> </SendIcon>
       </Button>
      </Form.Group>
    </Form>
    </div>
  </Container>
</footer>

</body>
  );
}

export default App;

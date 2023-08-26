import React from 'react';
import '../App.css';
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
  
  function Feed() {
    return (
      
  <>

  <header>
  <Container fluid className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" ,padding:"1.1rem"}}>
  <img src={images} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "9.7rem", width: "9.7rem",marginLeft:"2%",marginBottom:"-0.3%",marginTop:"-0.4rem" }} />
  <TextField 
          id="search"
          variant="outlined"
          placeholder="  Search" 
          InputProps={{
            startAdornment: <SearchIcon style={{ color: "#4EA4F3" }} />,
            style: { borderRadius: "50rem"} , 
            inputProps: { style: { color: "#4EA4F3" ,fontSize: "1.15rem",fontFamily:"Quicksand",fontWeight:"bold"} }
          }}
            style={{backgroundColor:"white",borderRadius: "50rem", borderColor: "white",width:"66%",marginLeft:"4.5%"}}   
        />
           <Button style={{height:"3.3rem",width:"8.2rem",marginLeft:"3rem", borderRadius:"50rem",borderColor:"#A4D6D3", color: "#4EA4F3",backgroundColor:"white",fontWeight:"bold", position: "relative", top: "-6.95rem",fontFamily:"Quicksand"}}> 
         View Account
         </Button>
  
  </Container>
  </header>
  
  
  <Container style={{marginTop:"3rem", marginBottom: "3rem"}}>
  {posts.map((post, index) => (
  <Card key={index} className={`mt-4 ${index === posts.length - 1 ? 'last-post' : ''}`} style={{marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#D7ECEC",borderRadius:"2rem" }}>
    <Card.Body>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="card-title" style={{ marginTop: "2rem",marginLeft: "2rem",marginBottom:"0.7rem",color:"#5E5E5E"}}>{post.title}</h2>
          <h6 className="card-subtitle mb-2 text-muted"  style={{marginTop: "0",marginLeft: "2rem" ,marginBottom: "7.5rem"}} >{post.subtitle}</h6>
          <p className="card-text" style= {{marginLeft: "2rem"}}>{post.content}</p>
        </div>
      </div>
    </Card.Body>
  </Card>
  ))}
  </Container>
  <footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
  <Container style={{ maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
  <div>
  <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
          <Form.Control type="text" style={{ fontFamily:"Quicksand",width: "71.6rem",marginTop: "0.5rem",marginLeft: "7rem",marginRight:"5rem",height:"2.5rem",fontSize: "1rem",marginBottom:"-0.5rem" }} placeholder="     New Post Title Here" />
          
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" style={{ fontFamily:"Quicksand",width: "71.6rem",marginLeft: "7rem",marginRight:"5rem",height:"6rem" ,fontSize: "1rem",marginTop:"-0.3rem",marginBottom:"-0.4rem"}}  placeholder="    New Post Message Here"  />
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

  export default Feed;
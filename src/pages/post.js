import React from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'; 
function Post() {

    const handleClick = () => {
        window.location.href = "/feed";
      }; 

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const title = urlParams.get('title');
    const body = urlParams.get('body');
    const user = urlParams.get('user');

    
const comments = [
    {
      input:"Comment comment comment comment",
      usern: "User y",
      likes: "x"
    },
    {
        input:"Comment comment comment comment",
        usern: "User y",
        likes: "x"
    },
    {
        input:"Comment comment comment comment",
        usern: "User y",
        likes: "x"
    }
  ];

    return (
        <>
        <header>
        <Container fluid="true" className="p-3" style={{ height: "7.5rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" ,padding:"1.1rem",display: "flex"}}>
          <ArrowBackIosIcon style={{height:"5rem",width:"6rem",cursor: "pointer", color:"#FFE3F4" }}
          onClick={handleClick}>
           </ArrowBackIosIcon>
           <div className="row">
        <div className="col-sm-6">
          <h2 className="card-title" style={{ marginTop: "-0.5rem",marginLeft: "1rem",color:"white", paddingTop: "0rem",paddingBottom: "0rem",fontSize:"2.7rem"}}>{title}</h2>
          <h6 className="card-title" style={{marginTop:"-2.5rem", marginLeft: "1.2rem",color:"white"}}>by {user} </h6>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
        <p className="card-text" style={{marginLeft: "1.2rem",marginTop:"-2rem",fontSize:"1rem",fontWeight:"bold",color:"#3B9B95"}}>x likes</p>
        <p className="card-text" style = {{marginLeft: "1.2rem", paddingTop:"0rem",marginTop:"-2rem",fontSize:"1rem",fontWeight:"bold",color:"#3B9B95"}}>x comments</p>
      </div>
      </div>
        </Container>
        </header>

    <Card style={{marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#FFE3F4",borderRadius:"1.7rem",marginTop:"2rem"}}>
    <Card.Body>
      <div className="row">
        <div className="col-sm-6">
          <p className="card-text" style= {{marginLeft: "1.3rem",paddingBottom: "1.3rem", paddingTop:"1.1rem",fontSize:"1.5rem",fontWeight:"bold"}}>{body}</p>
          </div>
      </div>
    </Card.Body>
  </Card>

  <Container  style ={{marginTop:"2rem"}}>
{comments.map((comment, index) => (
 <Card key={index} className={`mt-4 ${index === comments.length - 1 ? 'last-post' : ''}`} style={{marginLeft:"-5.5rem",marginRight:"6.2rem", backgroundColor: "#DAEFEF",borderRadius:"2rem",marginTop:"-1.3rem",width:"83rem"}}>
    <Card.Body>
      <div className="row">
        <div className="col-sm-6">
        <h6 className="card-title" style={{ marginLeft: "1.3rem",color:"#5E5E5E",fontWeight:"bold",paddingTop:"1rem",marginBottom:"-1rem"}}>{comment.usern}</h6>
          <p className="card-text" style= {{marginLeft: "1.3rem",fontSize:"1rem",fontWeight:"bold"}}>{comment.input}</p>
        <p className="card-text" style={{marginLeft: "1.3rem",fontSize:"0.8rem",fontWeight:"bold",color:"#000000",paddingBottom: "1.3rem",marginTop:"-0.9rem"}}>{comment.likes} likes</p>
          </div>
      </div>
    </Card.Body>
  </Card>
))}
</Container>

<footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
  <Container style={{height:"10rem", maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
  <div>
  <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" style={{ broderRadius:"100rem",fontFamily:"Quicksand",width: "68rem",marginLeft: "6rem",marginRight:"5rem",height:"6rem" ,fontSize: "1rem",marginTop:"2rem",marginBottom:"-0.4rem"}}
            placeholder="    New Comment Here" />
         <Button style={{ width:"9.3rem",marginLeft:"-3rem", borderRadius:"2rem",borderColor:"#A4D6D3",backgroundColor:"white"}} > 
         <SendIcon style={{height:"5.8rem",width:"5rem",color: "#A4D6D3" ,marginLeft:"1rem"}}> </SendIcon>
         </Button>
        </Form.Group>
      </Form>
      </div>
    </Container>
  </footer>
        </>
    );
}

export default Post;
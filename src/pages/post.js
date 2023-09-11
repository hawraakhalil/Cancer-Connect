import React , { useEffect, useState } from 'react';
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
    const ID = urlParams.get('ID');
    const timestamp = urlParams.get("timestamp");

 /*   
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
  ];*/
/*
    //reads comments
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await fetch(`https://cniwk2kqhbb5cyvwh4smrufsgy0trsdq.lambda-url.eu-north-1.on.aws/?postId=${ID}`);
  
          if (response.ok) {
            const data = await response.json();
            setComments(data.Items.map(comment => ({
              body: comment.M.body.S,
              user: comment.M.user.S
            })));
          } else {
            console.error('Error fetching comments:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      };
  
      fetchComments();
    }, [postId]);
    */
   
      const [post, setPost] = useState({});
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Replace 'your-lambda-endpoint-url' with the actual URL of your Lambda function
        fetch('https://cniwk2kqhbb5cyvwh4smrufsgy0trsdq.lambda-url.eu-north-1.on.aws/')
          .then(response => response.json())
          .then(data => {
            setPost(data.Items[0]); // Assuming you expect a single post in the response
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    

  //writes comments
  function submitComment() {
    const commentText = document.getElementById('commentText').value; // Get the comment from the textarea
  
    // Perform any necessary validation or data formatting before sending the comment to the Lambda function
  
    // Make a fetch request to send the comment to the Lambda function
    fetch('https://atjp55wjrqu66gndwgzxrrr7ke0ecsip.lambda-url.eu-north-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID: ID,
        user: user,
        body: commentText, // Pass the comment in the request body
        timestamp:timestamp
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the Lambda function
      console.log('Response from the Lambda function:', data);
      // Optionally, update the UI or perform any other necessary actions after submitting the comment
    })
    .catch(error => {
      // Handle any error that occurred
      console.error('Error calling the Lambda function:', error);
    });
  
    // Optionally, you can clear the textarea after submitting the comment
    // document.getElementById('commentText').value = '';
  }

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

 <Card style={{marginLeft:"-5.5rem",marginRight:"6.2rem", backgroundColor: "#DAEFEF",borderRadius:"2rem",marginTop:"-1.3rem",width:"83rem"}}>
    <Card.Body>
      <div className="row">
        <div className="col-sm-6">
        <h6 className="card-title" style={{ marginLeft: "1.3rem",color:"#5E5E5E",fontWeight:"bold",paddingTop:"1rem",marginBottom:"-1rem"}}>comment.user</h6>
          <p className="card-text" style= {{marginLeft: "1.3rem",fontSize:"1rem",fontWeight:"bold"}}>comment.body</p>
        <p className="card-text" style={{marginLeft: "1.3rem",fontSize:"0.8rem",fontWeight:"bold",color:"#000000",paddingBottom: "1.3rem",marginTop:"-0.9rem"}}>comment.likes likes</p>
          </div>
      </div>
    </Card.Body>
  </Card>

</Container>

<footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
  <Container style={{height:"10rem", maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
  <div>
  <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control id="commentText" as="textarea" style={{ broderRadius:"100rem",fontFamily:"Quicksand",width: "68rem",marginLeft: "6rem",marginRight:"5rem",height:"6rem" ,fontSize: "1rem",marginTop:"2rem",marginBottom:"-0.4rem"}}
            placeholder="    New Comment Here" />
         <Button style={{ width:"9.3rem",marginLeft:"-3rem", borderRadius:"2rem",borderColor:"#A4D6D3",backgroundColor:"white"}}  onClick={submitComment} > 
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
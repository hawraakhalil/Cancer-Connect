import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import profile from './profile.png';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import avatar5 from './avatar5.png';
import avatar6 from './avatar6.png';
import avatar7 from './avatar7.png';
import avatar8 from './avatar8.png';
function Post() {
 
  const avatars = [
    profile,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8
  ];

  const [refresh, setRefresh] = useState(false);
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const title = urlParams.get('title');
  const body = urlParams.get('body');
  const username = urlParams.get('user');
  const ID = urlParams.get('ID');
  const timestamp = urlParams.get("timestamp");
  const likes = urlParams.get("likes");
  const commCount = urlParams.get("commCount");
  const username2 = urlParams.get("username2");
  const avatar=urlParams.get("avatar")
 
  const handleClick = () => {
    const user = encodeURIComponent(username2);
    window.location.href = `/feed?user=${user}`;
  };

//calling function that adds likes
const handleLikeClick = (postId,timestamp,username) => {
  console.log("hi")
  // Call the Lambda function to increment the like counter
  fetch('https://y5doj3ikh4jauvp6b5dx7qw6t40vnjpm.lambda-url.eu-north-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postId ,timestamp,username}),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(error);
      }
      // Handle the success response, e.g. update UI or show a message
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error updating likes:', error);
      // Handle the error, e.g., show an error message to the user
    });
};



  //reads comments 
  useEffect(() => {
    fetch('https://cniwk2kqhbb5cyvwh4smrufsgy0trsdq.lambda-url.eu-north-1.on.aws/' + ID)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.Items[0].comments_dictionary)
        save(data.Items[0].comments_dictionary); // Save the comments array
        setPost(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [refresh]);
  const save = (commentsArray) => {
    console.log(commentsArray);
    localStorage.setItem('comments', JSON.stringify(commentsArray));
    setComments(commentsArray);

  };
  console.log(comments);

  //writes comments
  function submitComment() {
    const commentText = document.getElementById('commentText').value; // Get the comment from the textarea

    // Make a fetch request to send the comment to the Lambda function
    fetch('https://atjp55wjrqu66gndwgzxrrr7ke0ecsip.lambda-url.eu-north-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID: ID,
        user: username,
        body: commentText, // Pass the comment in the request body
        timestamp: timestamp
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the Lambda function
        console.log('Response from the Lambda function:', data);
        document.getElementById('commentText').value = '';
        setRefresh(true);
      })
      .catch(error => {
        // Handle any error that occurred
        console.error('Error calling the Lambda function:', error);
      });
  }

  return (
    <>
      <header>
        <Container fluid="true" className="p-3" style={{ height: "7.5rem", maxWidth: "100rem", backgroundColor: "#5785C0", padding: "1.1rem", display: "flex" }}>
          <ArrowBackIosIcon style={{ height: "5rem", width: "6rem", cursor: "pointer", color: "#FADA5E" }}
            onClick={handleClick}>
          </ArrowBackIosIcon>
          <div className="row">
            <div className="col-sm-6">
            <div style={{ display: "flex", alignItems: "center" }}>
            <img src={avatars[avatar]} class="avatar-image" style = {{marginLeft:"-1rem",width:"5.5rem",height:"5.5rem",borderWidth:"0.3rem",marginTop:"-1.8rem"}}></img>
              <div>
              <h2 className="card-title" style={{ marginTop: "-0.5rem", marginLeft: "1rem", color: "white", paddingTop: "0rem", paddingBottom: "0rem", fontSize: "2.7rem" }}>{title}</h2>
              <h6 className="card-title" style={{ marginTop: "-2.5rem", marginLeft: "1.2rem", color: "white" }}>by {username} </h6>
            </div>
            </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={(e) => { e.stopPropagation();  handleLikeClick(ID,timestamp,username);}} style={{marginLeft: "5.5rem",marginTop:"-2.5rem",fontSize:"4rem",fontWeight:"bold",color:"#EFBCDB"}}><FavoriteIcon/>  </IconButton>
              <p className="card-text" style={{ marginLeft: "0.5rem", marginTop: "-1.55rem", fontSize: "1rem", fontWeight: "bold", color: "#FFFFFF" }}>{likes} likes</p>
              <p className="card-text" style={{ marginLeft: "1.2rem", paddingTop: "0rem", marginTop: "-1.55rem", fontSize: "1rem", fontWeight: "bold", color: "#FFFFFF" }}>{comments.length} comments</p>
            </div>
          </div>
        </Container>
      </header>

      <Card style={{ marginLeft: "6.2rem", marginRight: "6.2rem", backgroundColor: "#FADA5E", borderRadius: "1.7rem", marginTop: "2rem" }}>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <p className="card-text" style={{ marginLeft: "1.3rem", paddingBottom: "1.3rem", paddingTop: "1.1rem", fontSize: "1.5rem", fontWeight: "bold" }}>{body}</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Container style={{ marginTop: "2rem" }}>
        {comments.map((comment, index) => (
          <Card key={index} className={`mt-4 ${index === comments.length - 1 ? 'last-post' : ''}`} style={{ marginLeft: "-5.5rem", marginRight: "6.2rem", backgroundColor: "#8CC4FF", borderRadius: "2rem", marginTop: "-1.3rem", width: "83rem" }}>
            <Card.Body>
              <div className="row">
                <div className="col-sm-6">
                  <h6 className="card-title" style={{ marginLeft: "1.3rem", color: "#5E5E5E", fontWeight: "bold", paddingTop: "1rem", marginBottom: "-1rem" }}>{comment.user}</h6>
                  <p className="card-text" style={{ marginLeft: "1.3rem", fontSize: "1rem", fontWeight: "bold" ,paddingBottom:"1rem"}}>{comment.body}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Container style={{ height: "10rem", maxWidth: "100rem", backgroundColor: "#5785C0" }}>
          <div>
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control id="commentText" as="textarea" style={{ broderRadius: "100rem", fontFamily: "Quicksand", width: "68rem", marginLeft: "6rem", marginRight: "5rem", height: "6rem", fontSize: "1rem", marginTop: "2rem", marginBottom: "-0.4rem" }}
                  placeholder="    New Comment Here" />
                <Button style={{ width: "9.3rem", marginLeft: "-3rem", borderRadius: "2rem", borderColor: "#5785C0", backgroundColor: "white" }} onClick={submitComment} >
                  <SendIcon style={{ height: "5.8rem", width: "5rem", color: "#5785C0", marginLeft: "1rem" }}> </SendIcon>
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
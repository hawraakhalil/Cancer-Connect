import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
  const [error] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes,setLikes] = useState([])
  const [liked,setLiked] = useState([])
  const [submititng, setSubmitting] = useState(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const title = urlParams.get('title');
  const body = urlParams.get('body');
  const username = urlParams.get('user');
  const ID = urlParams.get('ID');
  const timestamp = urlParams.get("timestamp");
  const username2 = urlParams.get("username2");
  const avatar=urlParams.get("avatar");
  const badge = urlParams.get("badge");

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
      }else {
        // Trigger a refresh after the like operation is successful
        setRefresh(true);
      }
      // Handle the success response, e.g. update UI or show a message
    })
    .catch((error) => {
      console.error('Error updating likes:', error);
      // Handle the error, e.g., show an error message to the user
    });
};



  //reads comments 
  useEffect(() => {
    fetch('https://cniwk2kqhbb5cyvwh4smrufsgy0trsdq.lambda-url.eu-north-1.on.aws/' + ID + username2)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.Items[0].comments_dictionary)
        save(data.Items[0].comments_dictionary,data.Items[0].likes,data.Items[0].liked_or_no); // Save the comments arra
        setRefresh(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [refresh,ID,username2]);
    const save = (commentsArray,likes,liked_or_no) => {
    console.log(commentsArray);
    localStorage.setItem('comments', JSON.stringify(commentsArray));
    localStorage.setItem('likes', likes.toString());
    localStorage.setItem('liked_or_no', liked_or_no.toString());
    setComments(commentsArray);
    setLikes(likes);
    setLiked(liked_or_no);
  };
  console.log(comments);

  //writes comments
  function submitComment() {
    if (submititng) return;
    else setSubmitting(true);
    const commentText = document.getElementById('commentText').value; // Get the comment from the textarea

    // Make a fetch request to send the comment to the Lambda function
    fetch('https://atjp55wjrqu66gndwgzxrrr7ke0ecsip.lambda-url.eu-north-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID: ID,
        user: username2,
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
        setSubmitting(true);
      })
      .catch(error => {
        // Handle any error that occurred
        console.error('Error calling the Lambda function:', error);
      });
  }

  return (
    <>
      <header>
        <Container fluid="true" className="p-3" style={{ height: "7.5rem", maxWidth: "100rem", backgroundColor: "#0F52BA", padding: "1.1rem", display: "flex" }}>
          <ArrowBackIosIcon style={{ height: "5rem", width: "6rem", cursor: "pointer", color: "#FADA5E" }}
            onClick={handleClick}>
          </ArrowBackIosIcon>
          <div className="row">
            <div className="col-sm-6">
            <div style={{ display: "flex", alignItems: "center" }}>
            <img src={avatars[avatar]} class="avatar-image" alt="avatar" style = {{'--avatar-image-border-color': badge,marginLeft:"-1rem",width:"5.5rem",height:"5.5rem",borderWidth:"0.3rem",marginTop:"-1.8rem"}}></img>
              <div>
              <h2 className="card-title" style={{ marginTop: "-0.5rem", marginLeft: "1rem", color: "white", paddingTop: "0rem", paddingBottom: "0rem", fontSize: "2.7rem" }}>{title}</h2>
              <h6 className="card-title" style={{ marginTop: "-2.5rem", marginLeft: "1.2rem", color: "white" }}>by {username} </h6>
            </div>
            </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={(e) => { e.stopPropagation();  handleLikeClick(ID,timestamp,username2);}} style={{marginLeft: "5.5rem",marginTop:"-2.5rem",fontSize:"4rem",fontWeight:"bold",color: liked === '0' ? 'grey'  : "#DC143C"}}><FavoriteIcon/>  </IconButton>
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
        <Container style={{ height: "10rem", maxWidth: "100rem", backgroundColor: "#0F52BA" }}>
          <div  style={{ display: "flex", alignItems: "center" }}>
            <Form>
              <div>
                <Form.Control type="text" id="commentText" style={{ paddingLeft:"1rem",borderRadius:"1.2rem", fontFamily: "Quicksand", width: "68rem", marginLeft: "6rem", marginRight: "5rem", height: "6rem", fontSize: "1rem", marginTop: "2.5rem", marginBottom: "-1.85rem" }}
                  placeholder="New Comment Here" />
              </div>
              <div>
                <Button style={{ width: "9.3rem", marginLeft: "76.5rem", borderRadius: "2rem", borderColor: "#0F52BAA", backgroundColor: "white" ,marginTop:"-7rem"}} onClick={submitComment} >
                  <SendIcon style={{ height: "5.8rem", width: "5rem", color: "#0F52BA", marginLeft: "1rem",marginTop:"0.2rem" }}> </SendIcon>
                </Button>
                </div>
            </Form>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Post;
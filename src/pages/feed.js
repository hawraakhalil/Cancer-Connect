import React , { useState, useEffect,useContext } from 'react';
import '../App.css';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'; 
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import yellow from './yellow.png';
import logo1 from './logo1.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import profile from './profile.png';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import avatar5 from './avatar5.png';
import avatar6 from './avatar6.png';
import avatar7 from './avatar7.png';
import avatar8 from './avatar8.png';



function Feed() {
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

  //declare variables that we will use
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);

  //recieve user from login page
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user');

  //we are calling the backend function to read the posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://6o2k57kjivpml5yanhmtx42nau0cktug.lambda-url.eu-north-1.on.aws/' + username);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const dataArray = data.Items;
        const likedArray = data.liked_posts;
        console.log(likedArray)
        setPosts(dataArray);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts. Please try again.');
      }
    };
    fetchPosts();
  }, [refresh]);

  //we are calling the backend function to create new posts
  const createPost = async (newPost) => {
    try {
      const response = await fetch('https://3rwy23iemuqdcbph2gzvl5ytra0hxwpb.lambda-url.eu-north-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...newPost, username }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Logging the success message
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePostSubmit = async () => {
    try {
      // Make the API call to create the new post
      await createPost({ title: newPostTitle, body: newPostBody, username });
  
      // Clear the input fields after successful submission
      setNewPostTitle('');
      setNewPostBody('');
      //to refresh
      setRefresh(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
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
        // Handle the success response
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating likes:', error);
      });
  };

  //When you click on the view acc, go to the profile page 
  const handleClick2 = (postTitle,postBody,postUser,postID,posttime,postLikes,postComments,postAvatar) => {
  const title = encodeURIComponent(postTitle);
  const body = encodeURIComponent(postBody);
  const user = encodeURIComponent(postUser);
  const ID = encodeURIComponent(postID);
  const timestamp= encodeURIComponent(posttime);
  const likes = encodeURIComponent(postLikes);
  const commCount = encodeURIComponent(postComments);
  const username2 = encodeURIComponent(username);
  const avatar = encodeURIComponent(postAvatar);
  window.location.href = `/post?title=${title}&body=${body}&user=${user}&ID=${ID}&timestamp=${timestamp}&likes=${likes}&commCount=${commCount}&username2=${username2}&avatar=${avatar}`;
  }; 
  const handleClick3 = (postUser) => {
    const user = encodeURIComponent(postUser);
    window.location.href = `/profile?user=${user}`;
  };

    return (
    <>
    <header>
      <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem"}}>
        <img src={logo1} alt="Logo" className="rounded-circle" style={{border: "1px solid black" ,borderRadius: "50rem",height: "9.7rem", width: "9.7rem",marginLeft:"2%",marginBottom:"-0.3%",marginTop:"-0.4rem" }} />
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
        <Button  onClick={() => handleClick3(username)} style={{height:"3.3rem",width:"8.2rem",marginLeft:"3rem", borderRadius:"50rem", color: "black",backgroundColor:"#FADA5E",borderColor:"#FADA5E",fontWeight:"bold", position: "relative", top: "-6.95rem",fontFamily:"Quicksand"}}> 
          View Account
        </Button>
      </Container>
    </header>

    {error ? (
    <div style={{ textAlign: "center" , marginTop: "10rem" }}>
      <span style={{ fontSize: "2rem" }}>😢</span> {/* Sad face emoji */}
      <p style={{ marginTop: "1rem" }}>Error: {error}</p> {/* Display the error message */}
    </div>
    ) : (
    <Container style={{marginTop:"3rem", marginBottom: "3rem"}}>
      {posts.map((post, index) => (
      <Card  onClick={() => handleClick2(post.title,post.body,post.username,post.ID,post.timestamp,post.likes,post.comment_count,post.avatar)} key={index} className={`mt-4 ${index === posts.length - 1 ? "last-post" : ""} post-card`} style={{marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#8CC4FF",borderRadius:"2rem",marginTop:"1rem" }}>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={avatars[post.avatar]} class="avatar-image" style = {{marginLeft:"1.2rem",width:"4rem",height:"4rem",borderWidth:"0.3rem",marginTop:"-1rem"}}></img>
                <div>
                  <h2 className="card-title" style={{ marginTop: "0.5rem",marginLeft: "1rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.title}</h2>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>by {post.username}</h6>
                </div>
              </div>
              <p className="card-text" style= {{marginLeft: "2.1rem",paddingBottom: "0.7rem", paddingTop:"0rem",marginTop:"0.1rem",fontSize:"1.05rem",fontWeight:"bold"}}>{post.body}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={(e) => { e.stopPropagation();  handleLikeClick(post.ID, post.timestamp,username);}} style={{marginLeft: "1.3rem",marginTop:"-1.1rem",fontSize:"2.2rem",fontWeight:"bold",color:"#EFBCDB"}}><FavoriteIcon/>  </IconButton>
              <p className="card-text" style={{marginLeft: "0rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.likes} likes</p>
              <p className="card-text" style = {{marginLeft: "1.3rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.comment_count} comments</p>
              <p className="card-text" style = {{marginLeft: "38rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.timestamp.slice(6,8)} - {post.timestamp.slice(4,6)} - {post.timestamp.slice(0,4)} </p>
            </div>
          </div>
        </Card.Body>
      </Card>
      ))}
    </Container>
    )}
    <footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container style={{ maxWidth: "100rem", backgroundColor: "#0F52BA" }}>
        <div>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" style={{ fontFamily:"Quicksand",borderColor:"#FFFFFF",borderRadius:"1.2rem",width: "71.6rem",marginTop: "0.5rem",marginLeft: "7rem",marginRight:"5rem",height:"2.5rem",fontSize: "1rem",marginBottom:"-0.5rem" }} 
            placeholder="     New Post Title Here" 
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}/>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Control
                  type="text"
                  style={{ fontFamily:"Quicksand",borderColor:"#FFFFFF",borderRadius:"1.2rem",width: "71.6rem",marginLeft: "7rem",marginRight:"5rem",height:"6rem" ,fontSize: "1rem",marginTop:"-0.3rem",marginBottom:"0.8rem"}}
                  placeholder="    New Post Message Here"
                  value={newPostBody}
                  onChange={(e) => setNewPostBody(e.target.value)}  />
              <Button style={{ marginTop: "-4rem" ,paddingBottom:"3rem" ,height:"7.6rem",width:"9.3rem",marginLeft:"-3rem", borderRadius:"2rem",borderColor:"#0F52BA",backgroundColor:"white"}}  onClick={handlePostSubmit} > 
                <SendIcon style={{height:"7.3rem",width:"5.3rem",color: "#0F52BA" ,marginLeft:"1rem"}}> </SendIcon>
              </Button>
              </div>
             </Form.Group>
            </Form>
          </div>
      </Container>
    </footer>
  
  </>
    );
  }

  export default Feed;
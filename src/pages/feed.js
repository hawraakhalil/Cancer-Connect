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
import images from './images.png';
import UsernameContext from '../usernameContext';



function Feed() {
  //we are calling the backend function to read the posts from the database
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const usernameContext = useContext(UsernameContext);
  const username = usernameContext.username;
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://6o2k57kjivpml5yanhmtx42nau0cktug.lambda-url.eu-north-1.on.aws/');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const dataArray = data.Items;

        setPosts(dataArray);
        console.log(dataArray)
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts. Please try again.');
      }
    };

    fetchPosts();
  }, [refresh]);
//we are calling the backend function to create new posts
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const createPost = async (newPost) => {
    try {
      const response = await fetch('https://3rwy23iemuqdcbph2gzvl5ytra0hxwpb.lambda-url.eu-north-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(newPost),
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

  //When you click on the view acc, go to the profile page 
  const handleClick = () => {
    window.location.href = "/profile";
  }; 

  posts.sort((a ,b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
      
  <>
  <header>
  <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" ,padding:"1.1rem"}}>
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
           <Button onClick={handleClick} style={{height:"3.3rem",width:"8.2rem",marginLeft:"3rem", borderRadius:"50rem",borderColor:"#A4D6D3", color: "#4EA4F3",backgroundColor:"white",fontWeight:"bold", position: "relative", top: "-6.95rem",fontFamily:"Quicksand"}}
           > 
           <Link to="/profile" style={{ textDecoration: "none", color: "#4EA4F3" }}></Link>
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
  <Card key={index} className={`mt-4 ${index === posts.length - 1 ? 'last-post' : ''}`} style={{marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#D7ECEC",borderRadius:"2rem" }}>
    <Card.Body>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="card-title" style={{ marginTop: "3rem",marginLeft: "1rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.title}</h2>
          <h6 className="card-title" style={{marginTop:"-2rem", marginLeft: "1.3rem",color:"#5E5E5E",fontWeight:"bold"}}>{post.username}</h6>
          <p className="card-text" style= {{marginLeft: "1rem",paddingBottom: "1rem", paddingTop:"0rem"}}>{post.body}</p>
        </div>
      </div>
    </Card.Body>
  </Card>
  ))}
  </Container>
    )}
  <footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
  <Container style={{ maxWidth: "100rem", backgroundColor: "#A4D6D3" }}>
  <div>
  <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
          <Form.Control type="text" style={{ fontFamily:"Quicksand",width: "71.6rem",marginTop: "0.5rem",marginLeft: "7rem",marginRight:"5rem",height:"2.5rem",fontSize: "1rem",marginBottom:"-0.5rem" }} 
          placeholder="     New Post Title Here" 
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" style={{ fontFamily:"Quicksand",width: "71.6rem",marginLeft: "7rem",marginRight:"5rem",height:"6rem" ,fontSize: "1rem",marginTop:"-0.3rem",marginBottom:"-0.4rem"}}
            placeholder="    New Post Message Here"
            value={newPostBody}
            onChange={(e) => setNewPostBody(e.target.value)}  />
         <Button style={{ marginTop: "-100rem" , marginBottom:"1rem" ,height:"7.6rem",width:"9.3rem",marginLeft:"-3rem", borderRadius:"2rem",borderColor:"#A4D6D3",backgroundColor:"white"}}  onClick={handlePostSubmit} > 
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
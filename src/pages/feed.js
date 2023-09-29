import React , { useState, useEffect } from 'react';
import '../App.css';
import Container from '@mui/material/Container';
import Card from 'react-bootstrap/Card'  
import Button from 'react-bootstrap/Button'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
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
import Popup from "./Popup"
import AddIcon from '@mui/icons-material/Add';



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
const badgess =[
  ['#FF3131'],
    ['#FF3131'],
    ['#A6A6A6'],
    ['#FFBD59'],
    ['#7ED957'],
]

  //declare variables that we will use
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  //recieve user from login page
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user');

  //we are calling the backend function to read the posts from the database

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://6o2k57kjivpml5yanhmtx42nau0cktug.lambda-url.eu-north-1.on.aws/' + username);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      const dataArray = data.Items;
      console.log(dataArray)
      const LikesArray = data.likes;
      const likedArray = data.liked_posts;
      console.log(likedArray)
      console.log(LikesArray)
      setPosts(dataArray);
      setLikedPosts(likedArray);
      setRefresh(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to fetch posts. Please try again.');
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [refresh]);
  
  const handleClick = () => {
    window.location.href = `/home`;
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
      })
      .catch((error) => {
        console.error('Error updating likes:', error);
      });
  };

  //When you click on the view acc, go to the profile page 
  const handleClick2 = (postBadge,postTitle,postBody,postUser,postID,posttime,postLikes,postComments,postAvatar) => {
  const badge =  encodeURIComponent(postBadge)
  const title = encodeURIComponent(postTitle);
  const body = encodeURIComponent(postBody);
  const user = encodeURIComponent(postUser);
  const ID = encodeURIComponent(postID);
  const timestamp= encodeURIComponent(posttime);
  const likes = encodeURIComponent(postLikes);
  const commCount = encodeURIComponent(postComments);
  const username2 = encodeURIComponent(username);
  const avatar = encodeURIComponent(postAvatar);
  window.location.href = `/post?badge=${badge}&title=${title}&body=${body}&user=${user}&ID=${ID}&timestamp=${timestamp}&likes=${likes}&commCount=${commCount}&username2=${username2}&avatar=${avatar}`;
  }; 
  const handleClick3 = (postUser) => {
    const user = encodeURIComponent(postUser);
    window.location.href = `/profile?user=${user}`;
  };
  //function that closes alert

  const refreshFeed = () => {
    // Call the fetchPosts function to re-fetch the posts
    fetchPosts();
  };

    return (
    <>
    <header  style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}>
      <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem"}}>
        <img src={logo1} alt="Logo" className="rounded-circle logo " style={{border: "1px solid black" ,borderRadius: "50rem",height: "9.7rem", width: "9.7rem",marginLeft:"2%",marginBottom:"-0.3%",marginTop:"-0.4rem" }}  onClick={(handleClick )}   title="Go to homepage" />
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
        <Button  onClick={() => handleClick3(username)} style={{height:"3.3rem",cursor: "pointer",width:"8.2rem",marginLeft:"3rem", borderRadius:"50rem", color: "black",backgroundColor:"#FADA5E",borderColor:"#FADA5E",fontWeight:"bold", position: "relative", top: "-6.95rem",fontFamily:"Quicksand"}}> 
          View Account
        </Button>
      </Container>
    </header>
    <div style={{ display: "flex", alignItems: "center" }}>
     
    {error ? (
    <div style={{ textAlign: "center" , marginTop: "10rem" }}>
      <span style={{ fontSize: "2rem" }}>😢</span> {/* Sad face emoji */}
      <p style={{ marginTop: "1rem" }}>Error: {error}</p> {/* Display the error message */}
    </div>
    ) : (
    <Container style={{marginTop:"8rem", marginBottom: "3rem",marginLeft:"14.5rem"}}>
      {posts.map((post, index) => (
      <Card  onClick={() => handleClick2(badgess[post.badges[0]],post.title,post.body,post.username,post.ID,post.timestamp,likedPosts.includes(post.ID) ? 1 : 0,post.comment_count,post.avatar)} key={index} className={`mt-4 ${index === posts.length - 1 ? "last-post" : ""} post-card`} style={{cursor: "pointer",marginLeft:"6.2rem",marginRight:"6.2rem", backgroundColor: "#8CC4FF",borderRadius:"2rem",marginTop:"1rem" }}>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={avatars[post.avatar]} alt ='avatar' className="avatar-image" style = {{'--avatar-image-border-color': badgess[post.badges[0]],marginLeft:"1.2rem",width:"4rem",height:"4rem",borderWidth:"0.3rem",marginTop:"-1rem"}}></img>
                <div>
                  <h2 className="card-title" style={{ marginTop: "0.5rem",marginLeft: "1rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.title}</h2>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>by {post.username}</h6>
                </div>
              </div>
              <p className="card-text" style= {{marginLeft: "2.1rem",paddingBottom: "0.7rem", paddingTop:"0rem",marginTop:"0.1rem",fontSize:"1.05rem",fontWeight:"bold"}}>{post.body}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={(e) => { e.stopPropagation();  handleLikeClick(post.ID, post.timestamp,username);}} style={{marginLeft: "1.3rem",marginTop:"-1.1rem",fontSize:"1.5rem",fontWeight:"bold",color: likedPosts.includes(post.ID) ?  "#DC143C" : "grey "}}><FavoriteIcon/>  </IconButton>
              <p className="card-text" style={{marginLeft: "0.5rem",paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.likes} likes</p>
              <p className="card-text" style = {{marginLeft: "1.3rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.comment_count} comments</p>
              <p className="card-text" style = {{marginLeft: "38rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.timestamp.slice(6,8)} - {post.timestamp.slice(4,6)} - {post.timestamp.slice(0,4)} </p>
            </div>
          </div>
        </Card.Body>
      </Card>
      ))}
    </Container>
    )}
    </div>
   
    <footer className="footer" style={{ position: "fixed", bottom: 0, width: "100%" }}>
    <Button  className="hover-button" style={{marginBottom:"2rem",cursor: "pointer", marginTop: "0rem" ,paddingBottom:"3rem" ,height:"7rem",width:"8rem",marginLeft:"84rem", borderRadius:"2rem",borderColor:"#FADA5E",backgroundColor:"#FADA5E"}}  onClick={togglePopup} > 
      <AddIcon style={{height:"10rem",width:"7rem",color: "white" ,marginLeft:"0rem",marginTop:"-1.5rem"}}> </AddIcon>
    </Button>
      {isPopupOpen && <Popup onClose={() => togglePopup()}  onNewPostCreated={refreshFeed} username={username}/>}
    </footer>
  
  </>
    );
  }

  export default Feed;

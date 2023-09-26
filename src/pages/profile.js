import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'; 
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import profile from './profile.png';
import Card from 'react-bootstrap/Card'
import badge from './badge.png';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import avatar5 from './avatar5.png';
import avatar6 from './avatar6.png';
import avatar7 from './avatar7.png';
import avatar8 from './avatar8.png';
import badge1 from './badge1.png';
import badge2 from './badge2.png';
import badge3 from './badge3.png';
import badge4 from './badge4.png';
import badge5 from './badge5.png';
import badge6 from './badge6.png';
import '../App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';



function Profile () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user');
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [badges, setBadges] = useState([]);

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
 
  const badgess = [
    badge1,
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6
  ];

//calling function that adds likes
const handleLikeClick = (postId,timestamp) => {
  console.log("hi")
  // Call the Lambda function to increment the like counter
  fetch('https://y5doj3ikh4jauvp6b5dx7qw6t40vnjpm.lambda-url.eu-north-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postId ,timestamp}),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update likes');
      }
      // Handle the success response, e.g. update UI or show a message
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error updating likes:', error);
      // Handle the error, e.g., show an error message to the user
    });
};

const handleClick2 = (postTitle,postBody,postUser,postID,posttime,postLikes,postComments) => {
const title = encodeURIComponent(postTitle);
const body = encodeURIComponent(postBody);
const user = encodeURIComponent(postUser);
const ID = encodeURIComponent(postID);
const timestamp= encodeURIComponent(posttime);
const likes = encodeURIComponent(postLikes);
const commCount = encodeURIComponent(postComments);
window.location.href = `/post?title=${title}&body=${body}&user=${user}&ID=${ID}&timestamp=${timestamp}&likes=${likes}&commCount=${commCount}`;
}; 


    //fetching user info:
    useEffect(() => {
      const fetchPosts = async () => {
      try{
      const response = await fetch('https://ocgkhxrto7csva35z5eyklkjvy0ahxnz.lambda-url.eu-north-1.on.aws/?username=' + username);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
          // Store the user information in state
          console.log(data)
          setUserInfo(data);
          console.log(userInfo)
          console.log(data.Posts)
          setPosts(data.Posts);
          console.log(posts);
          setBadges(data.badges);
          console.log(badges)
      }catch(error)  {
          console.error('Error:', error);
      }
        };
        fetchPosts();
    }, [username]);
   

  
    //handleClick takes you to the feed page
    const handleClick = () => {
        const user = encodeURIComponent(username);
        window.location.href = `/feed?user=${user}`;
      }; 
      //the badges text fields
      const textFieldsData = [
        {
          id: "1",
          label: "Reactions",
          defaultValue: " ",
          readOnly: true,
        },
        {
          id: "2",
          label: "Badge #1",
          defaultValue: " ",
          readOnly: true,
        },
        {
          id: "3",
          label: "Badge #2",
          defaultValue: " ",
          readOnly: true,
        },
        {
          id: "4",
          label: "Badge #3",
          defaultValue: " ",
          readOnly: true,
        },
      ];
      const selectedAvatar = avatars[userInfo.avatar];

    return (
        <>
<header>
  <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem"}}>
    <ArrowBackIosIcon style={{height:"4rem",width:"5rem",cursor: "pointer", color:"#FADA5E" }}
    onClick={handleClick}>
     </ArrowBackIosIcon>
    <TextField 
          id="search"
          variant="outlined"
          placeholder="  Search" 
          InputProps={{
            startAdornment: <SearchIcon style={{ color: "#4EA4F3" }} />,
            style: { borderRadius: "50rem"} , 
            inputProps: { style: { color: "#4EA4F3" ,fontSize: "1.15rem",fontFamily:"Quicksand",fontWeight:"bold"} }
          }}
            style={{backgroundColor:"white",borderRadius: "50rem", borderColor: "white",width:"55%",marginLeft:"28%"}}   
        />
  </Container>
  <div class="avatar-container">
  <img src={selectedAvatar} class="avatar-image" style = {{marginLeft:"4.9rem"}}></img>

</div>
  </header>
  <body>
    <h1 style={{color:"#155A56", paddingLeft:"5.5rem",marginBottom:"0rem",marginTop:"-0.5rem"}}>{userInfo.First_name} {userInfo.Last_name}</h1>
    <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ color: "#8C9898", paddingLeft: "5.5rem", margin: "0" }}>@{userInfo.username}</h3>

    </div>
    <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.4rem"}}>Status</h5>
    <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.1rem"}}>{userInfo.Day} {userInfo.Month} {userInfo.Year}</h5>
    <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.1rem"}}>Location</h5>
    <div>
      {textFieldsData.map((textField) => (
        <div key={textField.id} style={{ paddingLeft: "5.5rem",paddingTop:"0.5rem",paddingBottom:"0.1rem"}}>
          <TextField
            id={`standard-read-only-input${textField.id}`}
            label={textField.label}
            defaultValue={textField.defaultValue}
            InputProps={{
              readOnly: textField.readOnly,
            }}
            variant="standard"
            InputLabelProps={{ style: { fontSize: "1.2rem", color: "black" , fontWeight: "bold"  } }}
          />
        </div>
      ))}
    </div>
  </body>
  <div>
  {posts.map((post, index) => (
<Card key={index} className={`mt-4 ${index === posts.length - 1 ? 'last-post' : ''}`}  style={{width:"65rem",marginLeft:"28rem", marginBottom: index === posts.length - 1 ? "3rem" : "39rem",marginTop:"-38rem",backgroundColor: "#8CC4FF",borderRadius:"30px" }}>
  <Card.Body>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="card-title" style={{ marginTop: "3rem",marginLeft: "1.3rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.title}</h2>
          <p className="card-text" style= {{marginLeft: "1.3rem",paddingBottom: "0.7rem", paddingTop:"0rem",marginTop:"-1.8rem",fontSize:"1.05rem",fontWeight:"bold"}}>{post.body}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={(e) => { e.stopPropagation();}} style={{marginLeft: "1.3rem",marginTop:"-1.1rem",fontSize:"2.2rem",fontWeight:"bold",color:"#EFBCDB"}}><FavoriteIcon/>  </IconButton>
        <p className="card-text" style={{marginLeft: "0rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.likes} likes</p>
        <p className="card-text" style = {{marginLeft: "1.3rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.comment_count} comments</p>
      </div>
      </div>
    </Card.Body>
</Card>
 ))}
  </div>
  </>
    );

}
export default Profile;
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
import '../App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';



function Profile () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user');
  const [userInfo, setUserInfo] = useState({});


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

//When you click on the view acc, go to the profile page 



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
      fetch('https://ocgkhxrto7csva35z5eyklkjvy0ahxnz.lambda-url.eu-north-1.on.aws/?username=' + username)
      .then(response => response.json())
      .then(data => {
        {
          // Store the user information in state
          setUserInfo(data);

        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [username]);
    console.log(userInfo)
    const Posts= userInfo.Posts;
    console.log(Posts)
    //handleClick takes you to the feed page
    const handleClick = () => {
        const user = encodeURIComponent(username);
        window.location.href = `/feed?user=${user}`;
      }; 
      //te badges text fields
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

    return (
        <>
<header>
  <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#A4D6D3" ,padding:"1.1rem"}}>
    <ArrowBackIosIcon style={{height:"4rem",width:"5rem",cursor: "pointer", color:"#FFE3F4" }}
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
  <img src={profile} alt="Avatar" class="avatar-image"></img>
  <img src={badge} alt="badge" class="small-image"></img>
</div>
  </header>
  <body>
    <h1 style={{color:"#155A56", paddingLeft:"4rem",marginBottom:"0rem",marginTop:"-0.5rem"}}>{userInfo.First_name} {userInfo.Last_name}</h1>
    <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ color: "#8C9898", paddingLeft: "4rem", margin: "0" }}>@{userInfo.username}</h3>

    </div>
    <h5 style={{color:"#EFBCDB", paddingLeft: "5.6rem",margin:"0",paddingTop:"0.4rem"}}>Status</h5>
    <h5 style={{color:"#EFBCDB", paddingLeft: "5.6rem",margin:"0",paddingTop:"0.1rem"}}>{userInfo.Day} {userInfo.Month} {userInfo.Year}</h5>
    <h5 style={{color:"#EFBCDB", paddingLeft: "5.6rem",margin:"0",paddingTop:"0.1rem"}}>Location</h5>
    <div>
      {textFieldsData.map((textField) => (
        <div key={textField.id} style={{ paddingLeft: "4rem",paddingTop:"0.5rem",paddingBottom:"0.1rem"}}>
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
  
  </>
    );

}
export default Profile;
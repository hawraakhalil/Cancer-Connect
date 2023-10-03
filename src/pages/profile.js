import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import profile from './profile.png';
import Card from 'react-bootstrap/Card'
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
import DeleteIcon from '@mui/icons-material/Delete';



function Profile () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('user');
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [badges, setBadges] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
  const Status = [
   "","Cancer Patient","Cancer Survivor","Family or Friend","Health Professional"
 ]

  const badgess = [
    [badge1,"Fighter",'#940C0C'],
    [badge1,"Fighter",'#FF3131'],
    [badge2,"Survivor",'#A6A6A6'],
    [badge3, "Supporter",'#FFBD59'],
    [badge4, "Expert Contributor",'#7ED957'],
    [badge5, "Milestone",'#38B6FF'],
    [badge6,"Caregiver",'#8C52FF']
  ];

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

//calling delete
const handleDelete = (ID,timestamp) => {
  console.log("hi")
  // Call the Lambda function to increment the like counter
  fetch('https://y46lubhduhw37taegfujykiht40ttpax.lambda-url.eu-north-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ID,timestamp}),
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
      console.error('Error deleting:', error);
    });
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
          console.log(data.badges)
          setRefresh(false);
      }catch(error)  {
          console.error('Error:', error);
      }
        };
        fetchPosts();
    }, [refresh]);
   

  
    //handleClick takes you to the feed page
    const handleClick = () => {
        const user = encodeURIComponent(username);
        window.location.href = `/feed?user=${user}`;
      }; 
      //the badges text fields
      const selectedAvatar = avatars[userInfo.avatar];

    return (
        <>
<header>
  <Container fluid="true" className="p-3" style={{ height: "6rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem", pointerEvents: 'auto !important'}}>
    <ArrowBackIosIcon style={{height:"4rem",width:"5rem",cursor: "pointer", color:"#FADA5E" }}
    onClick={handleClick} >
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
  <img fixed src={selectedAvatar} alt="avatar" class="avatar-image" style = {{'--avatar-image-border-color': '#4EA4F3',marginLeft:"4.9rem",marginBottom:"3rem"}}></img>
</div>
  </header>
  <div className="content-container">
  <div className="user-info">
      <h1 style={{color:"#155A56", paddingLeft:"5.5rem",margin:"0"}}>{userInfo.First_name} {userInfo.Last_name}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ color: "#8C9898", paddingLeft: "5.5rem", margin: "0" }}>@{userInfo.username}</h3>
      </div>
      <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.4rem"}}> {Status[badges[0]]}</h5>
      <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.1rem"}}>{userInfo.Day} {userInfo.Month} {userInfo.Year}</h5>
      <h5 style={{color:"#FADA5E", paddingLeft: "7rem",margin:"0",paddingTop:"0.1rem"}}>Location</h5>
      <div>
        <h3 style={{color:"black", paddingLeft: "5.5rem",margin:"0",paddingTop:"0.1rem",marginBottom:"1rem"}}>Badges:</h3>
        {badges.map((badge) => (
          <div style={{ display: "flex", alignItems: "center" , marginTop:"-1.3rem",marginLeft:"1.5rem"}} >
            <img src={badgess[badge][0]} alt="badge" className="small-image"  style={{ '--small-image-border-color': badgess[badge][2] }} ></img>
            <h4 style={{color:"black", marginLeft: "4rem"}}>{badgess[badge][1]} </h4>
          </div>
        ))}
      </div>
      </div>
  <div className="posts" >
  <Container fixed >
  {posts.map((post, index) => (
<Card key={index} className={`mt-4 ${index === posts.length - 1 ? 'last-post' : ''}`}  style={{width:"65rem",cursor: "pointer", marginBottom: index === posts.length - 1 ? "3rem" : "39rem",marginTop:"-38rem",backgroundColor: "#8CC4FF",borderRadius:"30px" }}>
  <Card.Body>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="card-title" style={{ marginTop: "3rem",marginLeft: "1.1rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.title}</h2>
          <p className="card-text" style= {{marginLeft: "1.3rem",paddingBottom: "0.7rem", paddingTop:"0rem",marginTop:"-1.8rem",fontSize:"1.05rem",fontWeight:"bold"}}>{post.body}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={(e) => { e.stopPropagation(); handleLikeClick(post.ID, post.timestamp,username);}} style={{marginLeft: "1rem",marginTop:"-1.1rem",fontSize:"2.2rem",fontWeight:"bold",color: post.liked_users.includes(username) ?  "#DC143C" : "grey "}}><FavoriteIcon/>  </IconButton>
        <p className="card-text" style={{marginLeft: "0rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.likes} likes</p>
        <p className="card-text" style = {{marginLeft: "1rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.comment_count} comments</p>
        <p className="card-text" style = {{marginLeft: "41rem", paddingTop:"0rem",marginTop:"0rem",fontSize:"1rem",fontWeight:"bold",color:"#FFFFFF"}}>{post.timestamp.slice(6,8)} - {post.timestamp.slice(4,6)} - {post.timestamp.slice(0,4)} </p>
        <IconButton onClick={(e) => { e.stopPropagation(); handleDelete(post.ID,post.timestamp);}} style={{marginTop:"-1.1rem",fontSize:"2.2rem",fontWeight:"bold",color: "grey "}}><DeleteIcon/>  </IconButton>
      </div>
      </div>
    </Card.Body>
</Card>
 ))}
 </Container>
  </div>
</div>
  </>
    );

}
export default Profile;
import React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'; 
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import profile from './profile.png';
import badge from './badge.png';
import '../App.css';


function Profile () {

    //handleClick takes you to the feed page
    const handleClick = () => {
        window.location.href = "/feed";
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
    <h1 style={{color:"#155A56", paddingLeft:"4rem",marginBottom:"0rem",marginTop:"-0.5rem"}}>Name LastName</h1>
    <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ color: "#8C9898", paddingLeft: "4rem", margin: "0" }}>@username</h3>

    </div>
    <h5 style={{color:"#EFBCDB", paddingLeft: "5.6rem",margin:"0",paddingTop:"0.4rem"}}>Status</h5>
    <h5 style={{color:"#EFBCDB", paddingLeft: "5.6rem",margin:"0",paddingTop:"0.1rem"}}>DD Mon Year</h5>
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
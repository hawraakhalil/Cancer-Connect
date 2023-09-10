import React from 'react';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Post() {

    const handleClick = () => {
        window.location.href = "/feed";
      }; 

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const title = urlParams.get('title');
    const body = urlParams.get('body');
    const user = urlParams.get('user');


    return (
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
    );
}

export default Post;
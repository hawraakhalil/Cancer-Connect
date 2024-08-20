import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import profile from "../pictures/profile.png";
import Card from "react-bootstrap/Card";
import avatar1 from "../pictures/avatar1.png";
import avatar2 from "../pictures/avatar2.png";
import avatar3 from "../pictures/avatar3.png";
import avatar4 from "../pictures/avatar4.png";
import avatar5 from "../pictures/avatar5.png";
import avatar6 from "../pictures/avatar6.png";
import avatar7 from "../pictures/avatar7.png";
import avatar8 from "../pictures/avatar8.png";
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import badge4 from "../pictures/badge4.png";
import badge5 from "../pictures/badge5.png";
import badge6 from "../pictures/badge6.png";
import "./profilebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function ProfileBar() {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get("user");
    const [userInfo, setUserInfo] = useState({});
    const [posts, setPosts] = useState([]);
    const [badges, setBadges] = useState([]);
    const [error] = useState(null);
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
      avatar8,
    ];  
    //fetching user info:
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(
            "https://ocgkhxrto7csva35z5eyklkjvy0ahxnz.lambda-url.eu-north-1.on.aws/?username=" +
              username
          );
          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          const data = await response.json();
          // Store the user information in state
          console.log(data);
          setUserInfo(data);
          console.log(userInfo);
          console.log(data.Posts);
          setPosts(data.Posts);
          console.log(posts);
          setBadges(data.badges);
          console.log(data.badges);
          setRefresh(false);
        } catch (error) {
          console.error("Error:", error);
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
        <header>
        <Container
          fluid="true"
          className="p-3"
          style={{
            height: "6rem",
            maxWidth: "100rem",
            backgroundColor: "#0F52BA",
            padding: "1.1rem",
            pointerEvents: "auto !important",
            justifyContent: "space-between",
          }}
        >
          <ArrowBackIosIcon
            className="arrow-profbar"
            onClick={handleClick}
          ></ArrowBackIosIcon>
                  
        <div class="avatar-container-profbar">
          <img
            fixed
            src={selectedAvatar}
            alt="avatar"
            class="avatar-image-profbar"
            style={{
              "--avatar-image-border-color": "#4EA4F3",
              
              marginBottom: "3rem",
            }}
          ></img>
        </div>
          <TextField
            id="search"
            variant="outlined"
            placeholder="  Search"
            InputProps={{
              startAdornment: <SearchIcon style={{ color: "#4EA4F3" }} />,
              style: { borderRadius: "50rem" },
              inputProps: {
                style: {
                  color: "#4EA4F3",
                  fontSize: "1.15rem",
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                },
              },
            }}
            style={{
              backgroundColor: "white",
              borderRadius: "50rem",
              borderColor: "white",
              width: "55%",
              marginLeft: "30%",
            }}
          />

        </Container>
      </header>
  );
};

export default ProfileBar
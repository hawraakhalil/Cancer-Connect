import React, { useState, useEffect } from "react";
import "../App.css";
import "./feedFooter.css";
import Container from "@mui/material/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import logo1 from "../pictures/logo3.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import profile from "../pictures/profile.png";
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
import Popup from "./Popup";
import AddIcon from "@mui/icons-material/Add";
import Confetti from "react-confetti";


function FeedFooter() {
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
  const badgess = [
    [badge1, "", ""],
    [badge1, "#FF3131", "Earned by those who post live and exclusive content from Palestine"],
    [
      badge2,
      "#38B6FF",
      "Awarded to Palestine Unveiled viewers who contribute to the Palestinian cause through learning about it",
    ],
    [
      badge3,
      "#FFBD59",
      "Granted to those who post and spread awareness outside of Palestine",
    ],
    [
      badge4,
      "#7ED957",
      "Earned by health professionals and medical experts sharing medical insights",
    ],
    [
      badge5,
      "#A6A6A6",
      "Received after posting 10 times for active participation ",
    ],
    [
      badge6,
      "#8C52FF",
      "Received after 10 comments and 10 likes for supporting others and active engagement in discussions",
    ],
  ];
  const badgesName = [
    [""],
    ["Live Blogger"],
    ["Viewer"],
    ["Foreign Supporter"],
    ["Health Professional"],
    ["Milestone"],
    ["Ultimate Supporter"],
  ];

  //declare variables that we will use
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showBadgeMessage, setShowBadgeMessage] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  //recieve user from login page
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get("user");

  //we are calling the backend function to read the posts from the database

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://6o2k57kjivpml5yanhmtx42nau0cktug.lambda-url.eu-north-1.on.aws/" +
          username
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      const dataArray = data.Items;
      const BadgesArray = data.badges;
      console.log(dataArray);
      console.log(BadgesArray);
      const LikesArray = data.likes;
      const likedArray = data.liked_posts;
      console.log(likedArray);
      console.log(LikesArray);
      setPosts(dataArray);
      setLikedPosts(likedArray);
      setRefresh(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to fetch posts. Please try again.");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  const handleClick = () => {
    window.location.href = `/home`;
  };
  //calling function that adds likes
  const handleLikeClick = (postId, timestamp, username) => {
    console.log("hi");
    // Call the Lambda function to increment the like counter
    fetch(
      "https://y5doj3ikh4jauvp6b5dx7qw6t40vnjpm.lambda-url.eu-north-1.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, timestamp, username }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          console.error(error);
        } else {
          // Trigger a refresh after the like operation is successful
          setRefresh(true);
        }
      })
      .catch((error) => {
        console.error("Error updating likes:", error);
      });
  };

  //When you click on the view acc, go to the profile page
  const handleClick2 = (
    postBadge,
    postTitle,
    postBody,
    postUser,
    postID,
    posttime,
    postLikes,
    postComments,
    postAvatar
  ) => {
    const badge = encodeURIComponent(postBadge);
    const title = encodeURIComponent(postTitle);
    const body = encodeURIComponent(postBody);
    const user = encodeURIComponent(postUser);
    const ID = encodeURIComponent(postID);
    const timestamp = encodeURIComponent(posttime);
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

  const [activeItem, setActiveItem] = useState(null);

  const toggleDescription = (itemNumber) => {
    setActiveItem(activeItem === itemNumber ? null : itemNumber);
  };

  const handlePopupClosed = () => {
    setShowBadgeMessage(true);
    setShowConfetti(true);
    // You can set a timeout to hide the message after a certain period
    setTimeout(() => {
      setShowBadgeMessage(false);
      setShowConfetti(false);
    }, 5000); // Adjust the duration as needed,
  };

    return (
        <footer className="footer-popfooter">
            <button className="hover-button-popfooter" onClick={togglePopup}>
                <AddIcon style={{
                    height: "5em",
                    width: "5rem",
                    color: "white",
                }}/>
            </button>
            {isPopupOpen && (
          <Popup
            onClose={() => togglePopup()}
            onNewPostCreated={refreshFeed}
            onPopupClosed={handlePopupClosed}
            username={username}
          />
        )}
        </footer>
    );
}

export default FeedFooter;

import React, { useState, useEffect } from "react";
import "../App.css";
import Container from "@mui/material/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import logo1 from "../pictures/logo1.png";
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
    avatar8,
  ];
  const badgess = [
    [badge1, "", ""],
    [badge1, "#FF3131", "Earned by those actively battling cancer"],
    [
      badge2,
      "#A6A6A6",
      "Awarded to cancer survivors who've completed their treatment",
    ],
    [
      badge3,
      "#FFBD59",
      "Granted to friends and family supporting cancer patients",
    ],
    [
      badge4,
      "#7ED957",
      "For health professionals and medical experts sharing insights",
    ],
    [
      badge5,
      "#38B6FF",
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
    ["Fighter"],
    ["Survivor"],
    ["Supporter"],
    ["Expert Contributor"],
    ["Milestone"],
    ["Caregiver"],
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
    <>
      <header
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <Container
          fluid="true"
          className="p-3"
          style={{
            height: "6rem",
            maxWidth: "100rem",
            backgroundColor: "#0F52BA",
            padding: "1.1rem",
          }}
        >
          <img
            src={logo1}
            alt="Logo"
            className="rounded-circle logo "
            style={{
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "50rem",
              height: "9.7rem",
              width: "9.7rem",
              marginLeft: "2%",
              marginBottom: "-0.3%",
              marginTop: "-0.4rem",
            }}
            onClick={handleClick}
            title="Go to homepage"
          />
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
              width: "66%",
              marginLeft: "4.5%",
            }}
          />
          <Button
            onClick={() => handleClick3(username)}
            style={{
              height: "3.3rem",
              cursor: "pointer",
              width: "8.2rem",
              marginLeft: "3rem",
              borderRadius: "50rem",
              color: "black",
              backgroundColor: "#FADA5E",
              borderColor: "#FADA5E",
              fontWeight: "bold",
              position: "relative",
              top: "-6.95rem",
              fontFamily: "Quicksand",
            }}
          >
            View Account
          </Button>
        </Container>
      </header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h3
            style={{
              color: "black",
              position: "fixed",
              top: "11rem",
              left: "7.6rem",
              right: 0,
            }}
          >
            Badges:
          </h3>
          <ul
            className="menu"
            style={{
              borderRadius: "20px",
              position: "fixed",
              top: "13.3rem",
              left: "2.3rem",
              right: 0,
              zIndex: 0,
              width: "15rem",
              marginLeft: "1rem",
              fontFamily: "Quicksand",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#FADA5E",
              border: "2px solid white",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((itemNumber) => (
              <li
                key={itemNumber}
                className="menu-item"
                onClick={() => toggleDescription(itemNumber)}
                style={{
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderBottom: "1px solid white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {badgesName[itemNumber]}
                {activeItem === itemNumber && (
                  <div className="description">
                    <img
                      src={badgess[itemNumber][0]}
                      alt="badge"
                      className="small-image"
                      style={{
                        "--small-image-border-color": badgess[itemNumber][1],
                        marginLeft: "-1.6rem",
                      }}
                    ></img>
                    <p style={{ fontSize: "1.1rem", padding: 0, margin: 0 }}>
                      {badgess[itemNumber][2]}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: "8rem", marginBottom: "3rem" }}>
          {error ? (
            <div style={{ textAlign: "center", marginTop: "10rem" }}>
              <span style={{ fontSize: "2rem" }}>😢</span>{" "}
              {/* Sad face emoji */}
              <p style={{ marginTop: "1rem" }}>Error: {error}</p>{" "}
              {/* Display the error message */}
            </div>
          ) : (
            <Container>
              {posts.map((post, index) => (
                <Card
                  onClick={() =>
                    handleClick2(
                      badgess[post.badges[0]][1],
                      post.title,
                      post.body,
                      post.username,
                      post.ID,
                      post.timestamp,
                      likedPosts.includes(post.ID) ? 1 : 0,
                      post.comment_count,
                      post.avatar
                    )
                  }
                  key={index}
                  className={`mt-4 ${
                    index === posts.length - 1 ? "last-post" : ""
                  } post-card`}
                  style={{
                    cursor: "pointer",
                    marginLeft: "20rem",
                    marginRight: "-20rem",
                    backgroundColor: "#8CC4FF",
                    borderRadius: "2rem",
                    marginTop: "1rem",
                    width: "61rem",
                  }}
                >
                  <Card.Body>
                    <div className="row">
                      <div className="col-sm-6">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={avatars[post.avatar]}
                            alt="avatar"
                            className="avatar-image"
                            style={{
                              "--avatar-image-border-color":
                                badgess[post.badges[0]][1],
                              marginLeft: "1.2rem",
                              width: "4rem",
                              height: "4rem",
                              borderWidth: "0.3rem",
                              marginTop: "-1rem",
                            }}
                          ></img>
                          <div>
                            <h2
                              className="card-title"
                              style={{
                                marginTop: "0.5rem",
                                marginLeft: "1rem",
                                color: "#5E5E5E",
                                paddingTop: "1rem",
                                paddingBottom: "0rem",
                                fontWeight: "bold",
                              }}
                            >
                              {post.title}
                            </h2>
                            <h6
                              className="card-title"
                              style={{
                                marginTop: "-1.7rem",
                                marginLeft: "1rem",
                                color: "#5E5E5E",
                                fontWeight: "bold",
                              }}
                            >
                              by {post.username}
                            </h6>
                          </div>
                        </div>
                        <p
                          className="card-text"
                          style={{
                            marginLeft: "2.1rem",
                            paddingBottom: "0.7rem",
                            paddingTop: "0rem",
                            marginTop: "0.1rem",
                            fontSize: "1.05rem",
                            fontWeight: "bold",
                          }}
                        >
                          {post.body}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikeClick(post.ID, post.timestamp, username);
                          }}
                          style={{
                            marginLeft: "1.3rem",
                            marginTop: "-1.1rem",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: likedPosts.includes(post.ID)
                              ? "#DC143C"
                              : "grey ",
                          }}
                        >
                          <FavoriteIcon />{" "}
                        </IconButton>
                        <p
                          className="card-text"
                          style={{
                            marginLeft: "0.5rem",
                            paddingTop: "0rem",
                            marginTop: "0rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                          }}
                        >
                          {post.likes} likes
                        </p>
                        <p
                          className="card-text"
                          style={{
                            marginLeft: "1.3rem",
                            paddingTop: "0rem",
                            marginTop: "0rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                          }}
                        >
                          {post.comment_count} comments
                        </p>
                        <p
                          className="card-text"
                          style={{
                            marginLeft: "38.5rem",
                            paddingTop: "0rem",
                            marginTop: "0rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                          }}
                        >
                          {post.timestamp.slice(6, 8)} -{" "}
                          {post.timestamp.slice(4, 6)} -{" "}
                          {post.timestamp.slice(0, 4)}{" "}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Container>
          )}
        </div>
      </div>
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2000, // Set a higher zIndex to ensure it's above other elements
          }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            recycle={false}
          />
        </div>
      )}

      {showBadgeMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#FADA5E",
            padding: "1rem",
            borderRadius: "0.5rem",
            color: "#fff",
            zIndex: 1000,
            flexDirection: "column", // Change to column layout
            alignItems: "center",
            width: "40rem",
            height: "10rem",
          }}
        >
          <div
            style={{
              background: "#FADA5E",
              padding: "1rem",
              borderRadius: "0.5rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          ></div>
          <img
            src={badgess[5][0]}
            alt="badge"
            className="smaller-image"
            style={{
              "--small-image-border-color": badgess[5][1],
              marginBottom: "0rem",
            }}
          ></img>
          <div style={{ marginLeft: "2.1rem" }}>
            Congratulations! You have earned the Milestone Badge!
          </div>
        </div>
      )}
      <footer className="footer" style={{ position: "fixed", bottom: 0 }}>
        <Button
          className="hover-button"
          style={{
            marginBottom: "2rem",
            cursor: "pointer",
            marginTop: "0rem",
            paddingBottom: "3rem",
            height: "7rem",
            width: "8rem",
            marginLeft: "84.6rem",
            borderRadius: "2rem",
            borderColor: "#FADA5E",
            backgroundColor: "#FADA5E",
          }}
          onClick={togglePopup}
        >
          <AddIcon
            style={{
              height: "10rem",
              width: "7rem",
              color: "white",
              marginLeft: "0rem",
              marginTop: "-1.5rem",
            }}
          >
            {" "}
          </AddIcon>
        </Button>
        {isPopupOpen && (
          <Popup
            onClose={() => togglePopup()}
            onNewPostCreated={refreshFeed}
            onPopupClosed={handlePopupClosed}
            username={username}
          />
        )}
      </footer>
    </>
  );
}

export default Feed;

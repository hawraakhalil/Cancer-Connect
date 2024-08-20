import React, { useState, useEffect } from "react";
import "../App.css";
import Container from "@mui/material/Container";
import Card from "react-bootstrap/Card";
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
import Confetti from "react-confetti";
import "./feedPosts.css";

function FeedPosts() {



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

      const [activeItem, setActiveItem] = useState(null);
    
      const toggleDescription = (itemNumber) => {
        setActiveItem(activeItem === itemNumber ? null : itemNumber);
      };
    

      return (
        <div className="container-fepost">
          <div className="layout-fepost">
            <div className="sidebar-fepost">
              <h3 className="sidebar-title-fepost">Badges:</h3>
              <ul className="menu-fepost">
                {[1, 2, 3, 4, 5, 6].map((itemNumber) => (
                  <li
                    key={itemNumber}
                    className="menu-item-fepost"
                    onClick={() => toggleDescription(itemNumber)}
                  >
                    {badgesName[itemNumber]}
                    {activeItem === itemNumber && (
                      <div className="description-fepost">
                        <img
                          src={badgess[itemNumber][0]}
                          alt="badge"
                          className="small-image-fepost"
                          style={{ "--small-image-border-color": badgess[itemNumber][1] }}
                        />
                        <p className="description-text-fepost">
                          {badgess[itemNumber][2]}
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-fepost">
              {error ? (
                <div className="error-message-fepost">
                  <span className="error-icon-fepost">😢</span>
                  <p className="error-text-fepost">Error: {error}</p>
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
                    } post-card-fepost`}
                  >
                    <Card.Body>
                      <div className="card-header-fepost">
                        <div className="avatar-container-fepost">
                          <img
                            src={avatars[post.avatar]}
                            alt="avatar"
                            className="avatar-image-fepost"
                            style={{ "--avatar-image-border-color": badgess[post.badges[0]][1] }}
                          />
                        </div>
                        <div className= "close">
                          <h2 className="card-title-fepost">{post.title}</h2>
                          <h6 className="card-subtitle-fepost">by {post.username}</h6>
                        </div>
                      </div>
                      <p className="card-text-fepost">{post.body}</p>
                      <div className="card-footer-fepost">
                    <div className="left-section-fepost">
                        <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            handleLikeClick(post.ID, post.timestamp, username);
                        }}
                        className={`like-button-fepost ${
                            likedPosts.includes(post.ID) ? 'liked' : ''
                        }`}
                        >
                        <FavoriteIcon />
                        </IconButton>
                        <p className="likes-count-fepost">{post.likes} likes</p>
                        <p className="comments-count-fepost">{post.comment_count} comments</p>
                    </div>
                    <p className="timestamp-fepost">
                        {post.timestamp.slice(6, 8)} - {post.timestamp.slice(4, 6)} - {post.timestamp.slice(0, 4)}
                    </p>
                    </div>

                    </Card.Body>
                  </Card>
                ))}
              </Container>
              )}
            </div>
          </div>
    
          {showConfetti && (
            <div className="confetti-container-fepost">
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
                recycle={false}
              />
            </div>
          )}
    
          {showBadgeMessage && (
            <div className="badge-message-fepost">
              <div className="badge-image-container-fepost">
                <img
                  src={badgess[5][0]}
                  alt="badge"
                  className="smaller-image-fepost"
                  style={{ "--small-image-border-color": badgess[5][1] }}
                />
              </div>
              <div className="badge-text-fepost">
                Congratulations! You have earned the Milestone Badge!
              </div>
            </div>
          )}
        </div>
      );
    };
    
export default FeedPosts;
// Popup.js
import React, { useState, useEffect } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { badgeClasses } from "@mui/material";

const Popup = ({ onClose, onNewPostCreated, onPopupClosed, username }) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [submititng, setSubmitting] = useState(false);

  //we are calling the backend function to create new posts
  const createPost = async (newPost) => {
    try {
      const response = await fetch(
        "https://3rwy23iemuqdcbph2gzvl5ytra0hxwpb.lambda-url.eu-north-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...newPost, username }),
        }
      );

      if (response.ok) {
        if (response.status === 201) {
          const data = await response.json();
          console.log(data.message); // Logging the success message
          setTimeout(() => {
            onPopupClosed();
          }, 400); // Adjust the delay as needed
        } else if (response.status === 200) {
          const data = await response.json();
          console.log(data.message); // Logging the success message
        }
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePostSubmit = async () => {
    if (submititng) return;
    else setSubmitting(true);
    try {
      // Make the API call to create the new post
      if (!newPostBody || !newPostTitle) {
        console.log("no body or title");
      } else {
        await createPost({ title: newPostTitle, body: newPostBody, username });
        onNewPostCreated();
        // Clear the input fields after successful submission
        setNewPostTitle("");
        setNewPostBody("");
        //to refresh
        onClose();
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="popup">
        <div
          className="popup-content"
          style={{ backgroundColor: "#0F52BA", borderRadius: "1.2rem" }}
        >
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            Create a new post!
          </h1>
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  style={{
                    paddingLeft: "1rem",
                    fontFamily: "Quicksand",
                    borderColor: "#FFFFFF",
                    borderRadius: "1.2rem",
                    width: "50.6rem",
                    marginTop: "0rem",
                    marginLeft: "3rem",
                    marginRight: "5rem",
                    height: "3.2rem",
                    fontSize: "1rem",
                    marginBottom: "-0.5rem",
                  }}
                  placeholder="New Post Title Here"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                />
              </Form.Group>
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  type="text"
                  style={{
                    paddingLeft: "1rem",
                    paddingTop: "-2rem",
                    fontFamily: "Quicksand",
                    borderColor: "#FFFFFF",
                    borderRadius: "1.2rem",
                    width: "50.6rem",
                    marginLeft: "3rem",
                    marginRight: "5rem",
                    height: "8rem",
                    fontSize: "1rem",
                    marginTop: "-0.3rem",
                    marginBottom: "0.8rem",
                  }}
                  placeholder="New Post Message Here"
                  value={newPostBody}
                  onChange={(e) => setNewPostBody(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                className="button"
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "0rem",
                  fontFamily: "Quicksand",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  height: "3.6rem",
                  width: "9.3rem",
                  marginLeft: "20rem",
                  borderRadius: "2rem",
                  borderColor: "#0F52BA",
                  backgroundColor: "#FADA5E",
                }}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                className="button"
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "0rem",
                  fontFamily: "Quicksand",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  height: "3.6rem",
                  width: "9.3rem",
                  marginLeft: "1rem",
                  borderRadius: "2rem",
                  borderColor: "#0F52BA",
                  backgroundColor: "#FADA5E",
                }}
                onClick={handlePostSubmit}
              >
                {" "}
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

// Popup.js
import React, { useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Popup = ({ onClose, onNewPostCreated, onPopupClosed, username }) => {
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");
    const [submitting, setSubmitting] = useState(false);

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
                const data = await response.json();
                console.log(data.message); // Logging the success message
                onNewPostCreated();  // Trigger refresh in parent component
                onClose();  // Close the popup
            } else {
                throw new Error("Failed to create post");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    const handlePostSubmit = async () => {
      if (submitting) return;  // Prevent multiple submissions
      setSubmitting(true);
  
      if (newPostBody && newPostTitle) {
          await createPost({ title: newPostTitle, body: newPostBody });
          onNewPostCreated();  // Notify the parent component to refresh the feed
      } else {
          console.log("Post title or body cannot be empty");
      }
  
      setSubmitting(false);
  };
    return (
        <div className="popup">
            <div
                className="popup-content"
                style={{ backgroundColor: "#0F52BA", borderRadius: "1.2rem", width: "75%" }}
            >
                <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Create a new post!
                </h1>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                style={{
                                    paddingLeft: "1rem",
                                    fontFamily: "Quicksand",
                                    borderColor: "#FFFFFF",
                                    borderRadius: "1.2rem",
                                    width: "75%",
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                type="text"
                                style={{
                                    paddingLeft: "1rem",
                                    paddingTop: "-2rem",
                                    fontFamily: "Quicksand",
                                    borderColor: "#FFFFFF",
                                    borderRadius: "1.2rem",
                                    width: "75%",
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
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;

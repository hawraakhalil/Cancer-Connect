import React, { useState, useEffect } from "react";
import logo1 from "../pictures/logo1.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import DonationPopup from "./DonationsPop";
import "../App.css";
import "../components/navbar.css";

function Donate() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPostID, setSelectedPostID] = useState(null);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  const scrollToAbout = () => {
    window.location.href = `/home`;
  };

  const navigateToDonate = () => {
    window.location.href = `/donate`;
  };

  const navigateToSignup = () => {
    window.location.href = `/signup`;
  };

  const navigateToAuthentication = () => {
    window.location.href = `/authentication`;
  };

  const navigateToHome = () => {
    window.location.href = `/home`;
  };

  const [campaigns, setCampaigns] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target: "",
    name: "",
  });
  const [setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!formData.name) {
        setErrorMessage("Please enter your full name.");
      } else if (!formData.description) {
        setErrorMessage("Please enter you description");
      } else if (!formData.target) {
        setErrorMessage("Please  enter your target value.");
      } else if (!formData.title) {
        setErrorMessage("Please  enter a title for your campaign.");
      } else {
        console.log("hi");
        setRefresh(true);
        const response = await fetch(
          "https://ansf735f2oqgwwwee7hfowahyu0emlua.lambda-url.eu-north-1.on.aws/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          // Handle error API response
          const data = await response.json();
          console.error(data.message);
          setErrorMessage(data.message);
        }
        setFormData({
          name: "",
          title: "",
          description: "",
          target: "",
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://z3rzrfksrihcdlymjv2wfczu7a0thger.lambda-url.eu-north-1.on.aws/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch campaigns");
      }
      const data = await response.json();
      // Store the user information in state
      console.log(data);
      setCampaigns(data);
      setRefresh(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    setRefresh(false);
  }, [refresh]);

  const refreshFeed = () => {
    // Call the fetchPosts function to re-fetch the posts
    fetchPosts();
  };

  const handleDonateClick = (postID) => {
    setSelectedPostID(postID);
    togglePopup();
  };

  return (
    <>
      <Container fluid="true" className="header-container">
        <img src={logo1} alt="Logo" className="logo" />
        <p className="title">Cancer Connect</p>
        <div className="btn-container">
          <Button onClick={navigateToHome} className="btn">Home</Button>
          <Button onClick={navigateToDonate} className="btn">Donate</Button>
          <Button onClick={scrollToAbout} className="btn">About us</Button>
          <Button onClick={navigateToAuthentication} className="btn">Sign in</Button>
          <Button onClick={navigateToSignup} className="btn">Sign up</Button>
        </div>
      </Container>
      <body>
        <div className="container1" onSubmit={handleSubmit}>
          <div className="section1">
            <div>
              <h1
                style={{
                  marginTop: "5rem",
                  marginLeft:"1rem",
                  color: "#EE9626",
                  width: "80rem",
                }}
              >
                {" "}
                Start Your Own Campaign
              </h1>
            </div>
            <div style={{ marginLeft: "-71rem", marginTop: "8rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  type="text"
                  placeholder="  Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    marginLeft: "-9rem",
                    width: "14rem",
                    height: "2.8rem",
                    borderColor: "#FFFFFF",
                    borderRadius: "1.5rem",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    marginTop: "2rem",
                  }}
                />
                <TextField
                  type="text"
                  placeholder="  Campaign Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  style={{
                    width: "18rem",
                    height: "2.8rem",
                    borderRadius: "1.5rem",
                    borderColor: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    paddingLeft: "1rem",
                    marginTop: "2rem",
                  }}
                />
              </div>
              <div>
                <OutlinedInput
                  type="text"
                  placeholder="  Campaign Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{
                    marginLeft: "-9rem",
                    height: "5rem",
                    borderColor: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "0.95rem",
                    marginTop: "2rem",
                    width: "33rem",
                    marginRight: "-10rem",
                    marginBottom: "1rem",
                  }}
                />
              </div>
              <OutlinedInput
                type="number"
                id="outlined-adornment-amount"
                placeholder="  Target Amount"
                name="target"
                value={formData.target}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={handleInputChange}
                style={{
                  marginLeft: "-9rem",
                  marginRight: "4rem",
                  height: "4rem",
                  borderColor: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "0.95rem",
                  width: "33rem",
                }}
              />
              <div>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  style={{
                    marginTop: "1.5rem",
                    marginLeft: "4rem",
                    cursor: "pointer",
                    width: "6rem",
                    height: "3rem",
                    backgroundColor: "white",
                    borderColor: "white",
                    borderRadius: "0.5rem",
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#F9A603",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          <div
            className="section3"
            style={{ overflowY: "auto", position: "relative" }}
          >
            <h1
              style={{
                marginLeft: "15rem",
                color: "#0F52BA",
                marginTop: "5rem",
              }}
            >
              Campaigns
            </h1>
            <Container style={{ position: "relative", paddingTop: "8.5rem" }}>
              {campaigns.map((post, index) => (
                <Card
                  key={index}
                  className={`mt-4 ${
                    index === campaigns.length - 1 ? "last-post2" : ""
                  } post-card`}
                  style={{
                    cursor: "pointer",
                    marginLeft: "-25rem",
                    marginRight: "0rem",
                    backgroundColor: "white",
                    borderRadius: "2rem",
                    marginTop: "1rem",
                    width: "39rem",
                    top: index === 0 ? "1rem" : "auto",
                  }}
                >
                  <Card.Body>
                    <div className="row">
                      <div className="col-sm-6">
                        <div style={{ display: "flex", alignItems: "center" }}>
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
                              {post.Campaign_title}
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
                              by {post.name}
                            </h6>
                            <h6
                              className="card-title"
                              style={{
                                marginTop: "-1.7rem",
                                marginLeft: "1rem",
                                color: "#5E5E5E",
                                fontWeight: "bold",
                              }}
                            >
                              Campaign ID: {post.ID}
                            </h6>
                            <h6
                              className="card-title"
                              style={{
                                marginTop: "-1.7rem",
                                marginLeft: "1rem",
                                color: "#5E5E5E",
                                fontWeight: "bold",
                              }}
                            >
                              Target Amount: {post.Campaign_target}$
                            </h6>
                            <h6
                              className="card-title"
                              style={{
                                marginTop: "-1.7rem",
                                marginLeft: "1rem",
                                color: "#5E5E5E",
                                fontWeight: "bold",
                              }}
                            >
                              Money Raised: {post.Current_amount}$
                            </h6>
                            <p
                              className="card-text"
                              style={{
                                marginLeft: "1rem",
                                marginTop: "-1.5rem",
                                fontSize: "1.05rem",
                                fontWeight: "bold",
                                paddingRight: "0.15rem",
                                paddigLeft: "0.15rem",
                                marginBottom: "-1rem",
                              }}
                            >
                              {post.Campaign_description}
                            </p>
                            <Button
                              onClick={() => handleDonateClick(post.ID)}
                              style={{
                                marginLeft: "31rem",
                                marginTop: "2rem",
                                marginBottom: "1rem",
                                cursor: "pointer",
                                width: "5rem",
                                height: "1.5rem",
                                backgroundColor: "#0F52BA",
                                borderColor: "#0F52BA",
                                borderRadius: "0.4rem",
                                fontFamily: "Lato",
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                                color: "white",
                              }}
                            >
                              Donate
                            </Button>
                            {popupOpen && (
                              <DonationPopup
                                onClose={togglePopup}
                                onNewPostCreated={refreshFeed}
                                selectedPostID={selectedPostID}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </div>
        </div>
      </body>
    </>
  );
}

export default Donate;

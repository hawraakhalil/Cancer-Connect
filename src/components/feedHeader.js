import React from "react";
import "./feedHeader.css";
import { Container, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo1 from "../pictures/logo1.png";

function FeedHeader() {

    const goToHome = () => {
        window.location.href = `/home`;
      };
      
      const goToProfile = (postUser) => {
        const user = encodeURIComponent(postUser);
        window.location.href = `/profile?user=${user}`;
      };
      
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const username = urlParams.get("user");

    return (
        <header className="header-feed">
        <Container
          fluid="true"
          className="container-feed header-feed"
        >
          <img
            src={logo1}
            alt="Logo"
            className="logo-feed"
            onClick={goToHome}
            title="Go to homepage"
          />
          <TextField
            id="search"
            variant="outlined"
            placeholder="  Search"
            InputProps={{
              startAdornment: <SearchIcon className="search-icon-feed" />,
              style: { borderRadius: '50rem' },
              inputProps: {
                style: {
                  color: '#4EA4F3',
                  fontSize: '1.15rem',
                  fontFamily: 'Quicksand',
                  fontWeight: 'bold',
                },
              },
            }}
            className="textfield-feed"
          />
          <Button
            onClick={() => goToProfile(username)}
            style={{
              height: "3rem",
              cursor: "pointer",
              marginLeft: "1rem",
              width: "auto",
              borderRadius: "50rem",
              color: "black",
              backgroundColor: "#FADA5E",
              borderColor: "#FADA5E",
              fontWeight: "bold",
              fontFamily: "Quicksand",
              position: "absolute",
              
            }}
           
          >
            View Account
          </Button>
        </Container>
      </header>
    );
  };
  

export default FeedHeader;
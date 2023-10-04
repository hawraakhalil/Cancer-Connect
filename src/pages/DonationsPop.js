import React, { useState ,useEffect } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from 'react-bootstrap/Button';
import "../App.css";

const DonationPopup = ({ isOpen, onClose ,selectedPostID,onNewPostCreated}) => {
    const [amount, setAmount] = useState('');
    const [ID, setID] = useState('');

      const handleDonate = (ID,amount) => {

        // Call the Lambda function to donate
        fetch('https://5q4aniddufsml74kkai5y6xwyu0rodyy.lambda-url.eu-north-1.on.aws/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ID , amount}),
        })
          .then((response) => {
            if (response.ok) {
                setTimeout(() => {
                    onClose();
                  }, 400);
            }
            if (!response.ok) {
              console.error("error");
            }
          })
          .catch((error) => {
            console.error('Error donating:', error);
          });
          onNewPostCreated();
          onClose();
      };

  return (
    <>
    <div className={`popup2 ${isOpen ? 'open' : ''}`}>
      <div className="popup2-content" style ={{height:"35rem"}}>
        <h2 style ={{color:"#0F52BA"}}>Donation Form</h2>
        <TextField
          required
          id="outlined-required"
          label="Cardholder Name"
          style ={{marginTop:"-1rem",marginBottom:"0rem",width:"24rem"}}
        />
         <TextField
          required
          id="outlined-required"
          label="e-mail address"
          style ={{marginTop:"1rem",marginBottom:"4.5rem",width:"24rem"}}
        />
         <div >
        <FormControl style={{ display: "flex", alignItems: "center"}} sx={{ m: 1 ,width:"36rem"}}>
       
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            style ={{marginLeft:"-7rem",marginTop:"-4rem",marginRight:"5rem", width:"12rem"}}
          />
          <TextField
            required
            id="ID"
            value = {selectedPostID}
            onChange={(e) => setID(e.target.value)}
            label="ID of campaign"
          style ={{marginLeft:"13rem",marginTop:"-3.5rem",width:"11rem"}}
        />
        </FormControl>
        </div>
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          style ={{marginTop:"0rem",marginBottom:"0rem",width:"24rem"}}
        />
        <div style={{ display: "flex", alignItems: "center"}}>
        <TextField
          required
          id="outlined-required"
          label="Exp Mon"
          style ={{marginLeft:"6.5rem",marginTop:"1rem",width:"7rem"}}
        /><TextField
        required
        id="outlined-required"
        label="Exp Year"
        style ={{marginLeft:"0.5rem",marginTop:"1rem",width:"7rem"}}
      />
      <TextField
       required
       id="outlined-required"
       label="Security Code"
        style ={{marginLeft:"0.5rem",marginTop:"1rem",width:"9rem"}}
      />
      </div>
      <Button
                className="button"
                style={{
                    color:"white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "3rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "1rem",
                  marginLeft: "0rem",
                  width:"6rem",
                  height:"3rem",
                  backgroundColor:"#0F52BA",
                  borderColor:"#0F52BA",
                  borderRadius:"0.5rem",
                  fontFamily:"Lato",
                  fontSize:"1rem"
                }}
                onClick={onClose}
              >
                Close
              </Button>
      <Button className="button"  onClick={() => handleDonate(selectedPostID, amount)} style ={{color:"white", marginTop: "1rem",marginLeft:"2rem",paddingTop: "0.5rem", paddingBottom: "1rem",cursor:"pointer",width:"6rem",height:"3rem",backgroundColor:"#0F52BA",borderColor:"#0F52BA",borderRadius:"0.5rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Submit</Button>
      </div>
      </div>
      </>
  );
}

export default DonationPopup;
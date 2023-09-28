import React from 'react';
import logo1 from './logo1.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import donate from './donate.png';

function Password() {

  const handleClick1 = () => {
    window.location.href = `/home`;
    
  };

  const handleClick2 = () => {
    window.location.href = `/password`;
  };
  const handleClick3 = () => {
    window.location.href = `/signup`;
  };
  const handleClick4 = () => {
    window.location.href = `/authentication`;
  };
  const handleClick5 = () => {
    window.location.href = `/home`;
  };

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  


    return (
        <>
        <header>
        <Container fluid="true" className="p-3" style={{ height: "4.7rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem"}}>
  <img src={logo1} alt="Logo" className="rounded-circle" style={{ border: "1px solid black" ,borderRadius: "50rem",height: "13rem", width: "13rem",marginLeft:"1%",marginBottom:"-11.5rem",marginTop:"-20rem" , position: "relative", zIndex: "2" }} />
  <p style={{fontFamily:"Quicksand",marginTop:"-0.5rem",color:"white", paddingLeft: "0rem",fontWeight:"800",fontSize:"3rem",paddingRight:"0rem",paddingBottom:"0rem",marginLeft:"16rem",marginBottom:"-5rem"}}>Cancer Connect</p>
  <Button onClick={handleClick5} style ={{marginTop:"0.8rem",marginLeft:"47rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Home</Button>
  <Button onClick={handleClick2} style ={{marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Donate</Button>
  <Button onClick={handleClick1} style ={{marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}> About us</Button>
  <Button onClick={handleClick4} style ={{marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign in</Button>
  <Button onClick={handleClick3} style ={{marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign up</Button>
  </Container>
        </header>
        <body>
            <div className="container1">
                <div className="section1">
                    <div> </div>
                </div>
            <div className="arc"></div>
            <div className="section2">
                <div>
                <TextField
          required
          id="outlined-required"
          label="Cardholder Name"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"0rem",width:"19rem"}}
        />
         <TextField
          required
          id="outlined-required"
          label="e-mail address"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"4.5rem",width:"19rem"}}
        />
         <div >
        <FormControl style={{ display: "flex", alignItems: "center"}} sx={{ m: 1 ,width:"32rem"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            style ={{marginLeft:"24.5rem",marginTop:"-4rem"}}
          />
                 <TextField
          required
          id="outlined-required"
          label="Security Code"
          style ={{marginLeft:"43rem",marginTop:"-3.5rem",width:"9rem"}}
        />
        </FormControl>
        </div>
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          style ={{marginLeft:"25rem",marginTop:"0rem",marginBottom:"0rem",width:"19rem"}}
        />
        <div style={{ display: "flex", alignItems: "center"}}>
        <TextField
          required
          id="outlined-required"
          label="Expiry Month"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"4.5rem",width:"9rem"}}
        /><TextField
        required
        id="outlined-required"
        label="Expiry Year"
        style ={{marginLeft:"1rem",marginTop:"1rem",marginBottom:"4.5rem",width:"9rem"}}
      />
      </div>
        
                </div>
            </div>
            </div>
        </body>
        </>
    );
}

export default Password;
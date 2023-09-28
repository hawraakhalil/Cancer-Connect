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

  const handleClickToAboutUs = () => {
    
  };
  const handleClickToHome = () => {
    window.location.href = `/home`;
  };
  const handleClickToSignUp = () => {
    window.location.href = `/signup`;
  };
  const handleClickToLogin = () => {
    window.location.href = `/authentication`;
  };

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  


    return (
        <>
        <header>
            <Container fluid="true" className="p-3" style={{ height: "4.65rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem",zIndex:3}}>
                <img src={logo1} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "13rem", width: "13rem",marginLeft:"1%",marginBottom:"-11.5rem",marginTop:"-20rem" , position: "relative", zIndex: "2", border: "1px solid black"  }} />
                <p style={{fontFamily:"Pacifico",marginTop:"-1rem",color:"black", paddingLeft: "0rem",fontWeight:"800",fontSize:"3rem",paddingRight:"0rem",paddingBottom:"0rem",marginLeft:"16rem",marginBottom:"-5.7rem"}}>Cancer Connect</p>
                <Button onClick={handleClickToHome } style ={{marginTop:"0.8rem",marginLeft:"43rem",width:"10rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Home</Button>
                <Button onClick={handleClickToAboutUs} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"10rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}> About us</Button>
                <Button onClick={handleClickToLogin} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"10rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign in</Button>
                <Button onClick={handleClickToSignUp} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"10rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign up</Button>
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
          label="Your Name"

    
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"0rem"}}
        />
         <TextField
          required
          id="outlined-required"
          label="e-mail address"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"4.5rem"}}
        />
        
        <FormControl  sx={{ m: 1 ,width:"32rem"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            style ={{marginLeft:"24.5rem",marginTop:"-4rem"}}
          />
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"4.5rem"}}
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
        style ={{marginLeft:"2rem",marginTop:"1rem",marginBottom:"4.5rem",width:"9rem"}}
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
import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import images from './images.png';
import Button from 'react-bootstrap/Button'
import { Zoom } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.png';
import slide5 from './slide5.png';
import news from './news.png';
import yellow from './yellow.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Home() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const specificSectionRef = useRef(null);
    const otherSectionRef = useRef(null);

    const handleButtonClick = () => {
        // Do something with the input values
        // For example, you can send them to an API endpoint or display them in the console
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
    
        // Clear the input fields
        setFirstName('');
        setLastName('');
        setEmail('');
      };

    const spanStyle = {
        padding: '20px',
        background: 'transparent',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '37.4rem'
      }


    const slideImages = [
        slide2,
        slide1,
        slide5,
        slide3
      ];

      const handleClick1 = () => {
        specificSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
      const handleOtherButtonClick = () => {
        otherSectionRef.current.scrollIntoView({ behavior: 'smooth' });
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




    return (
        <>
        <header>
  <Container fluid="true" className="p-3" style={{ height: "6.8rem",maxWidth: "100rem", backgroundColor: "#295e9b" ,padding:"1.1rem"}}>
  <img src={yellow} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "13rem", width: "13rem",marginLeft:"1%",marginBottom:"-12%",marginTop:"-20rem" , position: "relative", zIndex: "2" }} />
  <p style={{color:"black", paddingLeft: "0rem",margin:"0",fontWeight:"800",fontSize:"2.8rem",paddingRight:"0rem",paddingBottom:"-10rem",marginLeft:"15rem",marginBottom:"-5.3rem"}}>Cancer Connect</p>
  <Button onClick={handleClick1} style ={{marginTop:"0.8rem",marginLeft:"40rem",width:"11rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>About us</Button>
  <Button onClick={handleClick2} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"11rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}> Donate</Button>
  <Button onClick={handleClick4} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"11rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Sign in</Button>
  <Button onClick={handleClick3} style ={{marginTop:"0.8rem",marginLeft:"2rem",width:"11rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Sign up</Button>
  </Container>
  
  </header>
  <div className="slide-container">

        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div id="specific-section" ref={specificSectionRef}>
      <Container fluid="true" className="p-3" style={{ height: "45rem",maxWidth: "100rem", backgroundColor: "#FADA5E" ,padding:"1.1rem"}}>
      <p style={{color:"white", paddingLeft: "5rem",margin:"0",paddingTop:"1.9rem",fontWeight:"800",fontSize:"3.6rem",marginBottom:"3.5rem",paddingRight:"5rem"}}>MISSION AND VISION</p>
      <div >
      <p style={{color:"white", paddingLeft: "5rem",margin:"0",paddingTop:"-4rem",fontWeight:"800",fontSize:"2.8rem",marginBottom:"1rem",paddingRight:"5rem"}}>MISSION</p>
      <p style={{color:"white", paddingLeft: "5rem",margin:"0",paddingTop:"-4rem",fontWeight:"800",fontSize:"1.3rem",marginBottom:"5rem",paddingRight:"5rem"}}>To create a supportive online community that connects cancer patients and survivors, providing a platform for them to share their experiences, thoughts, and emotions. Through this platform, we aim to foster understanding, empathy, and solidarity among individuals affected by cancer, offering them a sense of belonging and support. Through the power of shared stories, we strive to enhance the mental well-being and overall quality of life of cancer patients and survivors.</p>
      </div>
      <div>
      <p style={{color:"white", paddingLeft: "5rem",margin:"0",paddingTop:"-4rem",fontWeight:"800",fontSize:"2.8rem",marginBottom:"1rem",paddingRight:"5rem"}}>VISION</p>
      <p style={{color:"white", paddingLeft: "5rem",margin:"0",paddingTop:"-4rem",fontWeight:"800",fontSize:"1.3rem",marginBottom:"8rem",paddingRight:"5rem"}}>A world where no one fights cancer alone. A vibrant online community that empowers cancer patients and survivors, giving them a voice and enabling them to connect with others who truly understand their journey. Through our platform, we aspire to foster hope, resilience, and emotional well-being by encouraging open conversations, sharing valuable resources, and promoting access to support networks. Together, we can make a difference in the lives of those affected by cancer, creating a more inclusive and compassionate world.</p>
      </div>
      </Container>
      </div>
      <footer>
        <div id="other-section" ref={otherSectionRef}>
      <Container fluid="true" className="p-3" style={{ height: "12rem",maxWidth: "100rem", backgroundColor: "#21292d" ,padding:"0.5rem"}}>
        <div onClick={handleOtherButtonClick}>
      <img  src={news} alt="Logo" className="rounded-circle" style={{ borderRadius: "50rem",height: "10rem", width: "10rem",marginLeft:"44%",marginBottom:"-3.4rem",marginTop:"-6rem" , position: "relative", zIndex: "2" }} />
      <MailOutlineIcon style={{height:"5rem",width:"3.5rem",color: "white" ,marginLeft:"-6.8rem",marginTop:"-8rem", position: "relative", zIndex: "2",marginBottom:"1.4rem"}}> </MailOutlineIcon >
      </div>
      <p style={{color:"white", paddingLeft: "28rem",margin:"0",paddingTop:"-4rem",fontWeight:"800",fontSize:"1.5rem",marginBottom:"1.5rem",paddingRight:"5rem", position: "relative", zIndex: "2"}}>Subscribe to our newsletter to get the latest updates</p>
      <TextField
      
          id="standard-required"
          label="   FIRST NAME"
          variant="standard"
          value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
          InputLabelProps={{
            style: { color: 'white',fontSize:"0.9rem"  }}}
            InputProps={{
                style: {
                    color: 'white',
                  borderBottom: "2px solid white" // Change the color and style of the line here
      
                }
              }}
            style ={{marginLeft:"23rem"}}
        />
            <TextField
   
          id="standard-required"
          label="LAST NAME"
          variant="standard"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          InputLabelProps={{
            style: { color: 'white',fontSize:"0.9rem"  }}}
            InputProps={{
                style: {
                    color: 'white',
                  borderBottom: "2px solid white" // Change the color and style of the line here
                }
              }}
            style ={{marginLeft:"5rem"}}
        />
         <TextField
      
          id="standard-required"
          label=" EMAIL ADDRESS"
          variant="standard"
           value={email}
        onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            style: { color: 'white',fontSize:"0.9rem" }}}
            InputProps={{
                style: {
                    color: 'white',
                  borderBottom: "2px solid white" // Change the color and style of the line here
                }
              }}
            style ={{marginLeft:"5rem"}}
        />
        <Button onClick={handleButtonClick} type="submit" style ={{marginTop:"0.5rem",width:"5rem",height:"3rem",borderRadius:"2.3rem",fontFamily:"Lato",fontSize:"0.9rem",marginLeft:"2rem"}}>Submit</Button>
        </Container>
        </div>
      </footer>

  </>
    );
}

export default Home;
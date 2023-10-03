import React, { useState ,useEffect} from "react";
import logo1 from './logo1.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Card from 'react-bootstrap/Card'  



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
  
  const [ID, setID] = useState('');
  const [amount, setAmount] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description:"",
    target:"",
    name:"",
  });
  const [errorMessage, setErrorMessage] = useState('');
  
 const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const posts = [

]

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    if (!formData.name ) {setErrorMessage('Please enter your full name.');}
    else if (!formData.description ) {setErrorMessage('Please enter you description');}
    else if (!formData.target)  {setErrorMessage('Please  enter your target value.');}
    else if (!formData.title)  {setErrorMessage('Please  enter a title for your campaign.');}
    else {
      console.log("hi")
    const response = await fetch("https://ansf735f2oqgwwwee7hfowahyu0emlua.lambda-url.eu-north-1.on.aws/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

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


useEffect(() => {
  const fetchPosts = async () => {
  try{
  const response = await fetch('https://z3rzrfksrihcdlymjv2wfczu7a0thger.lambda-url.eu-north-1.on.aws/');
  if (!response.ok) {
    throw new Error('Failed to fetch campaigns');
  }
  const data = await response.json();
      // Store the user information in state
      console.log(data)
      setCampaigns(data);
      setRefresh(false);
  }catch(error)  {
      console.error('Error:', error);
  }
    };
    fetchPosts();
}, [refresh]);


const handleDonate = (ID,amount) => {
  console.log("hi")
  console.log(ID)
  // Call the Lambda function to donate
  fetch('https://5q4aniddufsml74kkai5y6xwyu0rodyy.lambda-url.eu-north-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ID , amount}),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(errorMessage);
      }else {
        // Trigger a refresh after the like operation is successful
        setRefresh(true);
      }
    })
    .catch((error) => {
      console.error('Error donating:', error);
    });
};
    return (
        <>
        <header>
        <Container fluid="true" className="p-3" style={{ height: "3.8rem",maxWidth: "100rem", backgroundColor: "#0F52BA" ,padding:"1.1rem"}}>
  <img src={logo1} alt="Logo" className="rounded-circle" style={{ border: "1px solid black" ,borderRadius: "50rem",height: "9.7rem", width: "9.7rem",marginLeft:"2%",marginBottom:"-8rem",marginTop:"-2rem" , position: "relative", zIndex: "4" }} />
  <p style={{fontFamily:"Quicksand",marginTop:"-0.5rem",color:"white", paddingLeft: "0rem",fontWeight:"800",fontSize:"3rem",paddingRight:"0rem",paddingBottom:"0rem",marginLeft:"16rem",marginBottom:"-5.3rem"}}>Cancer Connect</p>
  <Button onClick={handleClick5} style ={{cursor: "pointer",marginTop:"0.8rem",marginLeft:"47rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Home</Button>
  <Button onClick={handleClick2} style ={{cursor: "pointer",marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Donate</Button>
  <Button onClick={handleClick1} style ={{cursor: "pointer",marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}> About us</Button>
  <Button onClick={handleClick4} style ={{cursor: "pointer",marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign in</Button>
  <Button onClick={handleClick3} style ={{cursor: "pointer",marginTop:"0.8rem",marginLeft:"1rem",width:"8rem",height:"4rem",backgroundColor:"#FADA5E",borderColor:"#FADA5E",borderRadius:"10rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1.1rem"}}>Sign up</Button>
  </Container>
        </header>
        <body>
            <div className="container1" onSubmit={handleSubmit}>
                <div className="section1">
                    <h1 style ={{marginTop:"-15rem",marginLeft:"10rem",color:"#0F52BA"}}> Create a Campaign!</h1>
                    <div style ={{ marginLeft:"-19rem",marginTop:"10rem" }}>
                    <div style={{display: "flex", alignItems: "center"}}>
                    <TextField
                    type="text"
                    placeholder="  Full Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{width:"9rem",height:"2.8rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"1rem"}}
                  />
                  <TextField
                    type="text"
                    placeholder="  Campaign Title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    style ={{ width:"12rem",height:"2.8rem",borderRadius:"1.5rem",borderColor:"#FFFFFF",fontFamily:"Lato",fontSize:"0.95rem",paddingLeft:"1rem",marginTop:"1rem"}}
                  />
                  </div>
                  <TextField
                    type="text"
                    placeholder="  Campaign Description" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    style={{height:"10rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",marginTop:"2rem",width:"22rem"}}
                  />
                   <TextField
                    type="number"
                    placeholder="  Target Amount" 
                    name="target"
                    value={formData.target}
                    onChange={handleInputChange}
                    style={{height:"1rem",borderColor:"#FFFFFF",borderRadius:"1.5rem",fontFamily:"Lato",fontSize:"0.95rem",width:"22rem",marginTop:"-5rem"}}
                  />
                    <Button onClick={handleSubmit} type="submit" style ={{marginTop:"-5rem",marginLeft:"7rem",cursor:"pointer",width:"6rem",height:"3rem",backgroundColor:"#50C878",borderColor:"#50C878",borderRadius:"0.5rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Submit</Button>
                  </div>
                </div>
              
            
          <div className="section2">
          <div style={{marginLeft:"-21rem"}}>
          <p style={{fontFamily:"Quicksand",color:"#0F52BA",marginLeft:"28rem",fontSize:"3rem",fontWeight:"bold",marginTop:"-1rem"}}>Donate Now!</p>
        <TextField
          required
          id="outlined-required"
          label="Cardholder Name"
          style ={{marginLeft:"25rem",marginTop:"-2rem",marginBottom:"0rem",width:"24rem"}}
        />
         <TextField
          required
          id="outlined-required"
          label="e-mail address"
          style ={{marginLeft:"25rem",marginTop:"1rem",marginBottom:"4.5rem",width:"24rem"}}
        />
         <div >
        <FormControl style={{ display: "flex", alignItems: "center"}} sx={{ m: 1 ,width:"36rem"}}>
       
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            style ={{marginLeft:"24.5rem",marginTop:"-4rem"}}
          />
          <TextField
            required
            id="ID"
            value = {ID}
            onChange={(e) => setID(e.target.value)}
            label="ID of campaign"
          style ={{marginLeft:"50rem",marginTop:"-3.5rem",width:"11rem"}}
        />
        </FormControl>
        </div>
        <TextField
          required
          id="outlined-required"
          label="Card Number"
          style ={{marginLeft:"25rem",marginTop:"0rem",marginBottom:"0rem",width:"24rem"}}
        />
        <div style={{ display: "flex", alignItems: "center"}}>
        <TextField
          required
          id="outlined-required"
          label="Exp Mon"
          style ={{marginLeft:"25rem",marginTop:"1rem",width:"7rem"}}
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
      <Button  onClick={() => handleDonate(ID, amount)} style ={{marginTop:"1rem",marginLeft:"33rem",cursor:"pointer",width:"6rem",height:"3rem",backgroundColor:"#50C878",borderColor:"#50C878",borderRadius:"0.5rem",fontFamily:"Lato",fontWeight:"bold",fontSize:"1rem"}}>Submit</Button>
            </div>
            </div>
            <div className="section3" style ={{overflowY: "auto" }}>
        <Container style={{marginTop:"15rem",marginBottom:"2rem"}}>
      {campaigns.map((post, index) => (
      <Card key={index} className={`mt-4 ${index === posts.length - 1 ? "last-post" : ""} post-card`} style={{cursor: "pointer",marginLeft:"0rem",marginRight:"0rem", backgroundColor: "#FAFDF3",borderRadius:"2rem",marginTop:"1rem" ,width:"22rem"}}>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <h2 className="card-title" style={{ marginTop: "0.5rem",marginLeft: "1rem",color:"#5E5E5E", paddingTop: "1rem",paddingBottom: "0rem",fontWeight:"bold"}}>{post.Campaign_title}</h2>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>by {post.name}</h6>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>Campaign ID: {post.ID}</h6>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>Target Amount: {post.Campaign_target}$</h6>
                  <h6 className="card-title" style={{marginTop:"-1.7rem", marginLeft: "1rem",color:"#5E5E5E",fontWeight:"bold"}}>Money Raised: {post.Current_amount}$</h6>
                  <p className="card-text" style= {{marginLeft: "1rem",paddingBottom: "0.7rem", marginTop:"-1.5rem",fontSize:"1.05rem",fontWeight:"bold",paddingRight:"0.15rem",paddigLeft:"0.15rem"}}>{post.Campaign_description}</p>
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

export default Password;
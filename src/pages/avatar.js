import React from 'react';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import avatar5 from './avatar5.png';
import avatar6 from './avatar6.png';
import avatar7 from './avatar7.png';
import avatar8 from './avatar8.png';


function Avatar() {
    
    //store user from create account page
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);  
    const userr = urlParams.get('user');

    //call the function that writes the avatar to the table for each user
    const handleSubmit = async (avatar) => {
        try {
        const response = await fetch("https://6gt7nerfvje3vle2cll5o3s2pm0seoji.lambda-url.eu-north-1.on.aws/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({userr,avatar})
        });
        if (response.ok) {
            // Handle successful API response
            const user = encodeURIComponent(userr);
            window.location.href = `/feed?user=${user}`;
            console.log("API request successful");
        } else {
            // Handle error API response
            const data = await response.json(); 
            console.error(data.message);
        }
        } catch (error) {
        // Handle network or other errors
        console.error("Error:", error);
        }
    };

    return (  
        <>
         <style>{'body { background-color: #FFF0F9; }'}</style>
         <p style={{color:"#A4D6D3", paddingLeft: "26rem",margin:"0",paddingTop:"1rem",fontWeight:"bold",fontSize:"4rem",marginBottom:"5rem"}}>Choose Your Avatar !</p>
         <div class="avatar-container" style = {{display: "flex", alignItems: "center" }}>
            <img src={avatar1} alt="Avatar" class="avatar-image"  onClick={(event,) => handleSubmit(1)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar2} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(2)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar3} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(3)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar4} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(4)} style={{borderColor:"#A4D6D3"}}></img>
        </div>
        <div class="avatar-container" style = {{display: "flex", alignItems: "center" ,marginTop:"7rem"}}>
            <img src={avatar5} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(5)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar6} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(6)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar7} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(7)} style={{borderColor:"#A4D6D3"}}></img>
            <img src={avatar8} alt="Avatar" class="avatar-image" onClick={(event) => handleSubmit(8)} style={{borderColor:"#A4D6D3"}}></img>
        </div>
        </>
    );
}

export default Avatar;
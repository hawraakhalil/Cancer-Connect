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
    
    return (
        
        <>
         <style>{'body { background-color: #FFF0F9; }'}</style>
         <p style={{color:"#A4D6D3", paddingLeft: "26rem",margin:"0",paddingTop:"1rem",fontWeight:"bold",fontSize:"4rem",marginBottom:"5rem"}}>Choose Your Avatar !</p>
         <div class="avatar-container" style = {{display: "flex", alignItems: "center" }}>
          <img src={avatar1} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar2} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar3} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar4} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
        </div>
        <div class="avatar-container" style = {{display: "flex", alignItems: "center" ,marginTop:"7rem"}}>
          <img src={avatar5} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar6} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar7} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
         <img src={avatar8} alt="Avatar" class="avatar-image" style={{borderColor:"#A4D6D3"}}></img>
        </div>
        </>
    );
}

export default Avatar;
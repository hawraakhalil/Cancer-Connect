import React, { useState, useEffect } from 'react';

const Message = ({ text, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(!!text); // Initially set based on whether there's text
  
    useEffect(() => {
      // If text becomes available, show the message
      if (text) {
        setVisible(true);
  
        // Set a timer to hide the message after the specified duration
        const timer = setTimeout(() => {
          setVisible(false);
          onClose(); // Optionally, you can call a function when the message disappears
        }, duration);
  
        return () => clearTimeout(timer);
      }
    }, [text, duration, onClose]);
  
    const messageStyle = {
      // Your styling here
    };
  
    return visible ? <div style={messageStyle}>{text}</div> : null;
  };
  
  export default Message;
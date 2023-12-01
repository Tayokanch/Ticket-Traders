import React from "react";
import "./ChatSeller.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import randomColor from 'randomcolor';

const ChatSeller = () => {
  const [seller, setSeller] = useState(null);
  const location = useLocation();
  const color = randomColor()
  useEffect(() => {
    if (location.state && location.state.result) {
      setSeller(location.state.result);
    }
  }, [location]);

  useEffect(() => {
    console.log("This is the seller", seller);
  }, [seller]);

  const firstLetters = `${seller?.firstName?.charAt(
    0
  )} ${seller?.lastName?.charAt(0)}`;
  return (
    <section className="chat-container">
      <section className="chat-box">
        <div className="header">
          <div className="circle" style={{background: color}}>
            <p className="initails" >{firstLetters}</p>
          </div>
          <div className="seller-contact">
            <p >{`${seller?.firstName} ${seller?.lastName}`}</p>
            <p>{seller?.email}</p>
          </div>
        </div>

        <form className="chat">
          <input
            name="chat"
            id="chat-input"
        
            placeholder={`chat with ${seller?.firstName}`}
          ></input>
          <button className="chat-button">send</button>
        </form>
      </section>
    </section>
  );
};

export default ChatSeller;

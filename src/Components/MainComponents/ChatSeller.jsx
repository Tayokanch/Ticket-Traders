import React from "react";
import "./ChatSeller.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChatSeller = () => {
  const [seller, setSeller] = useState(null);
  const location = useLocation();

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
      <div className="header">
        <div className="cirle">
          <p className="initails">{firstLetters}</p>
        </div>
        <div className="seller-contact">
          <p>{`${seller?.firstName} ${seller?.lastName}`}</p>
          <p>{seller?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default ChatSeller;

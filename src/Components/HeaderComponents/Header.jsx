import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <ul>
      <li onClick={() => navigate("/")}>Home</li>
      <li onClick={() => navigate("/Alltickets")}>Avialable Tickets</li>
      <li onClick={() => navigate("/Purchase")}>Buy Ticket</li>
      <li>About Us</li>
    </ul>
  );
}

export default Header;

import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleclick = () => {
    setToggleIcon(!toggleIcon);
  };

  const navigate = useNavigate();
  return (
    <>
      <section className="icon-box">
        <FontAwesomeIcon icon={faBars} className="icon" onClick={handleclick} />
      </section>
      <ul className={`${toggleIcon ? "active" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/Alltickets")}>Avialable Tickets</li>
        <li onClick={() => navigate("/Purchase")}>Search Tickets</li>
        <li>About Us</li>
      </ul>
    </>
  );
}

export default Header;

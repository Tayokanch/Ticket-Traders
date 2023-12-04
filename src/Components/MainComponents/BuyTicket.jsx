import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BuyTicket.css";
import Advert from "./Advert";
import { useContext } from "react";
import { formContext } from "../../App";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  ticket_From: "",
  ticket_To: "",
};

function BuyTicket() {
  const [buyerDetails, setBuyerDetails] = useState(INITIAL_STATE);
  const {
    formSubmissions,
    setFormSubmissions,
    allTickets,
    allMatchedTicket,
    setAllMatchedTicket,
  } = useContext(formContext);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("this is buyerDetails", buyerDetails);
    setBuyerDetails(INITIAL_STATE);

    const matchTicket = allTickets?.filter((allTicket) => {
      return (
        allTicket?.ticket_From.toLowerCase() ===
          buyerDetails?.ticket_From.toLowerCase() &&
        allTicket?.ticket_To.toLowerCase() ===
          buyerDetails?.ticket_To.toLowerCase()
      );
    });

    console.log("This is matchedTickets", matchTicket);
    setAllMatchedTicket(matchTicket);
    navigate("/AvailableTickets");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerDetails({ ...buyerDetails, [name]: value });
  };

  return (
    <section className="main-purchase-section">
      <Advert />
      <section className="purchase-section">
        <h2>Purchase a ticket</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label>
              Location
              <input
                type="text"
                placeholder="From"
                value={buyerDetails.ticket_From}
                name="ticket_From"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Destination
              <input
                type="text"
                placeholder="To"
                value={buyerDetails.ticket_To}
                name="ticket_To"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <button type="submit">Search</button>
          <div>
            <FontAwesomeIcon icon={faRepeat} />
          </div>
        </form>
      </section>
    </section>
  );
}

export default BuyTicket;

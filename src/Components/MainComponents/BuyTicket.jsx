import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BuyTicket.css";
import Advert from "./Advert";

const INITIAL_STATE = {
  location: "",
  destination: "",
};

function BuyTicket() {
  const [buyerDetails, setBuyerDetails] = useState(INITIAL_STATE);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log( 'this is buyerDetails',buyerDetails);
    setBuyerDetails(INITIAL_STATE);
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
                value={buyerDetails.location}
                name="location"
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
                value={buyerDetails.destination}
                name="destination"
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

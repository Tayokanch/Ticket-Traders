import React from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import "./AllTickets.css";

function MatchedTickets() {
  const { allMatchedTicket, setAllMatchedTicket } = useContext(formContext);

  return (
    <section className="main-all-tickets">
      <section className="all-tickets">
        <section className="table">
          <section className="table_header">
            <h1>Matched Tickets</h1>
          </section>
          <section className="table_body">
            {allMatchedTicket?.length > 0 ? (
              <table>
                <thead>
                  <tr className="header-row">
                    <th>Id</th>
                    <th>Seller</th>
                    <th>Location</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allMatchedTicket.map((ticket, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`${ticket?.firstName} ${ticket?.lastName}`}</td>
                      <td>{ticket?.ticket_To}</td>
                      <td>{ticket?.ticket_From}</td>
                      <td>Available</td>
                      <td>{`£${ticket?.price}`}</td>
                      <td>
                        <button>Chat</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p id="notice">No Tickets Found</p>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}

export default MatchedTickets;

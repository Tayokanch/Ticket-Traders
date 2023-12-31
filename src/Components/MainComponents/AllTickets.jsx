import React from "react";
import { useContext } from "react";
import { formContext } from "../../App";
import "./AllTickets.css";
import { useNavigate } from "react-router-dom";

function AllTickets() {
  const { formSubmissions } = useContext(formContext);
  const navigate = useNavigate()

  const handleChat = (profile)=>{
      navigate(`/chat/${profile.id}`,{state: {result: profile}})
  }

  return (
    <section className="main-all-tickets">
      <section className="all-tickets">
        <section className="table">
          <section className="table_header">
            <h1>Tickets Available</h1>
          </section>
          <section className="table_body">
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
                {formSubmissions?.map((formSubmission, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{`${formSubmission.firstName} ${formSubmission.lastName}`}</td>
                    <td>{formSubmission.ticket_From}</td>
                    <td>{formSubmission.ticket_To}</td>
                    <td>Available</td>
                    <td>{`£${formSubmission.price}`}</td>
                    <td>
                      <button onClick={() => handleChat(formSubmission)}>
                        Chat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </section>
  );
}

export default AllTickets;

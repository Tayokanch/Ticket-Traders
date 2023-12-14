import React from "react";
import { useState, useEffect } from "react";
import "./PostTicket.css";
import { useContext } from "react";
import { formContext } from "../../App";
import cities from "../../data.js";
import { useNavigate } from "react-router-dom";
import Advert from "./Advert.jsx";
import { nanoid } from "nanoid";
import CustomSelect from './CustomSelect'

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  ticket_From: "",
  ticket_To: "",
  price: null,
};

function PostTicket() {
  const navigate = useNavigate();
  const { formSubmissions, setFormSubmissions, allTickets, setAllTickets } =
    useContext(formContext);

  const sortedCities = cities
    .slice()
    .sort((a, b) => a.city.localeCompare(b.city));

  const [form, setForm] = useState(INITIAL_STATE);
  const [countries, setCountries] = useState(cities);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    const id = nanoid();
    e.preventDefault();

    const newsubmission = { ...form, id };
    const updatedFormdata = [...allTickets, newsubmission];
    setAllTickets(updatedFormdata);
    setForm(INITIAL_STATE);
    navigate("/Alltickets");

    console.log("This is the formSubmissions:", allTickets);
  };

  const renderCityOptions = () => {
    return sortedCities.map((city, index) => (
      <option value={city.city} key={index}>
        {city.city}
      </option>
    ));
  };

  return (
    <section className="main-post-section">
      <Advert />
      <section className="form-section">
        <form onSubmit={submitForm}>
          <h3>Post a Ticket</h3>
          <div>
            <label>
              {" "}
              FirstName:
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={(event) => handleChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              LastName:
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={(event) => handleChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Contact:
              <input
                onChange={(event) => handleChange(event)}
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
              />
            </label>
          </div>

          <div>
            <label>Ticket from</label>
            <select
              name="ticket_From"
              onChange={(event) => handleChange(event)}
              value={form.ticket_From}
            >
              <option value="" disabled selected>
                Ticket From
              </option>
              {sortedCities.map((city, index) => (
                <option value={city.city} key={index}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Ticket To</label>
            <select
              name="ticket_To"
              onChange={(event) => handleChange(event)}
              value={form.ticket_To}
            >
              <option value="" disabled selected>
                Ticket To
              </option>
              {sortedCities.map((city, index) => (
                <option value={city.city} key={index}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label> custom select:</label>
            <CustomSelect countries={countries} setCountries={setCountries} />
          </div>
          <div>
            <label>
              {" "}
              Price:
              <input
                onChange={(event) => handleChange(event)}
                type="text"
                placeholder="price"
                name="price"
                value={form.price}
              />
            </label>
          </div>

          <button>Post</button>
        </form>
      </section>
    </section>
  );
}

export default PostTicket;

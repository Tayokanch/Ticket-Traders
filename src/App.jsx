import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import trainbg from "./assets/train2.jpeg";
import Header from "./Components/HeaderComponents/Header";
import Advert from "./Components/MainComponents/Advert";
import PostTicket from "./Components/MainComponents/PostTicket";
import BuyTicket from "./Components/MainComponents/BuyTicket";
import { createContext } from "react";
import AllTickets from "./Components/MainComponents/AllTickets";

const formContext = createContext();

function App() {
  const [formSubmissions, setFormSubmissions] = useState([
    {
      firstName: "Tayo",
      lastName: "Quadri",
      email: "TayoQuadri11@gmail.com",
      ticket_From: "Manchester",
      ticket_To: "Stockport",
      price: 16,
      id: 1,
    },

    {
      firstName: "Eazy",
      lastName: "Balogun",
      email: "easyB@gmail.com",
      ticket_From: "Oldham",
      ticket_To: "London",
      price: 14,
      id: 2,
    },

    {
      firstName: "Tosin",
      lastName: "Olorundare",
      email: "olorundareT@gmail.com",
      ticket_From: "Sheffied",
      ticket_To: "Layland",
      price: 20,
      id: 3,
    },
  ]);

  return (
    <>
      <header>
        <Header />
      </header>
      <formContext.Provider
        value={{
          formSubmissions,
          setFormSubmissions,
        }}
      >
        <main>
          <Routes>
            <Route path="/" element={<PostTicket />}></Route>
            <Route path="/purchase" element={<BuyTicket />}></Route>
            <Route path="/Alltickets" element={<AllTickets />}></Route>
          </Routes>
        </main>
      </formContext.Provider>
    </>
  );
}

export { App, formContext };

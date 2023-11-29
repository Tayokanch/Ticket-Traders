import { useState } from "react";
import "./App.css";
import trainbg from "./assets/train2.jpeg";
import Header from "./Components/HeaderComponents/Header";
import Advert from "./Components/MainComponents/Advert";
import SellerForm from "./Components/MainComponents/SellerForm";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Advert />
        <SellerForm />
      </main>
    </>
  );
}

export default App;

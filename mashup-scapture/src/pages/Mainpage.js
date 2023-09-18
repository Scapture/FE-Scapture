import React from "react";
import Header from "../components/Header";
import Cardsection from "../components/Cardsection";
import Moverecording from "../components/Moverecording";
import Template from "../components/Template";
import MoveComunity from "../components/MoveCommunity";
import Footer from "../components/Footer";

function Mainpage() {
  return (
    <>
      <Template>
        <Header/>
        <Cardsection/>
        <Moverecording/>
        <MoveComunity/>
        <Footer/>
      </Template>
    </>
  );
}

export default Mainpage;

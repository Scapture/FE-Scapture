import React from "react";
import Header from "../components/Header";
import Cardsection from "../components/Cardsection";
import Moverecording from "../components/Moverecording";
import Template from "../components/Template";
import MoveComunity from "../components/MoveCommunity";
import Footer from "../components/footer";


function Recordingpage() {
  return (
    <>
      <Template>
        <Header children={"DO "}/>
        <Moverecording/>
        <Footer/>
      </Template>
    </>
  );
}

export default Recordingpage;

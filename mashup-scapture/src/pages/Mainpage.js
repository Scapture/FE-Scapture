import React from "react";
import Header from "../components/Header";
import Cardsection from "../components/Cardsection";
import Moverecording from "../components/Moverecording";
import Template from "../components/Template";

function Mainpage() {
  return (
    <>
      <Template>
        <Header/>
        <Cardsection/>
        <Moverecording/>
      </Template>
    </>
  );
}

export default Mainpage;

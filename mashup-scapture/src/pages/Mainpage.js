import React from "react";
import Header from "../components/Header";
import Frame from "../components/Template";
import Cardsection from "../components/Cardsection";
import Moverecording from "../components/Moverecording";

function Mainpage() {
  return (
    <>
      <Frame>
        <Header/>
        <Cardsection/>
        <Moverecording/>
      </Frame>
    </>
  );
}

export default Mainpage;

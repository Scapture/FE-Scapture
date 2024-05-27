import React from "react";
import Header from "../components/Header";
import Template from "../components/Template";
import Footer from "../components/footer";
import Record from "../components/Record";
import VideoGridView from "../components/Videocomponent";


function Recordingpage() {
  return (
    <>
      <Template>
        <Header children={"DO "}/>
        <Record/>
        
        <VideoGridView/>
        <Footer/>
      </Template>
    </>
  );
}

export default Recordingpage;

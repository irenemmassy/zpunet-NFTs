import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Subcribe from "./Components/Subcribe";
import TopNFT from "./Components/TopNFT";

function App() {
  return (
    <>
      <div className="main">
        <div className="container mx-auto xl:px-32 px-2 pt-10">
          <Header />
          <Hero />
          <TopNFT />
          <Subcribe />
        </div>
      </div>
    </>
  );
}

export default App;

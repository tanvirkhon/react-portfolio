import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

// Import styles
import "./App.css";

const App = () => {
  return (
    <main>
      <Nav />
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
      </div>
    </main>
  );
};

export default App;

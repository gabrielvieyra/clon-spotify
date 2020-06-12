import React from "react";
import "./styles/style.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import Playback from "./components/Playback";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Sidebar />
        <div>
          <Header />

          <MainArea />
        </div>
      </div>
      <Playback />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registerform from "./components/Registerform";
import Nav from "./components/Routes/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[white]">
        <Nav />
      </div>
    </>
  );
}

export default App;

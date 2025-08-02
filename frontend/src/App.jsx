import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registerform from "./components/Registerform";
import Nav from "./Routes/Nav";


function App() {
  return (
    <>
      <div className="w-full h-screen bg-[white]">
        <Nav/>
        {/* <Registerform/> */}
      </div>
    </>
  );
}

export default App;

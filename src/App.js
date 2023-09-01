import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Booker from "./components/Booker/Booker";
import Roster from "./components/Roster/Roster";
import Backoffice from "./components/Backoffice/Backoffice";

import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/booker" element={<Booker />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/backoffice" element={<Backoffice />} />
      </Routes>
    </>
  );
}

export default App;

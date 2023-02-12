import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/bar/NavigationBar";
import SideBar from "./components/bar/SideBar";
import Login from "./components/Login";
import Note from "./components/Note";
import TXT from "./components/TXT";
import CV from "./components/CV";
import './App.css';

function App() {
  return (
    <section className="column-container">
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <section className="row-container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cv" element={<CV />}/>
            <Route path="/note" element={<Note />} />
            <Route path="/txt" element={<TXT />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </section>
      </Router>
    </section>
  );
}

export default App;

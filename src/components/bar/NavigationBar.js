import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <section className="header">
        <a className="header-button" href="/"> Home </a>
        <a className="header-button" href="/login"> Login </a>
        <a className="header-button" href="/cv"> CV </a>
        <a className="header-button" href="/note"> Notes </a>
        <a className="header-button" href="/txt"> TXT </a>
      </section>
      <hr className="header-line" />
    </>
  );
}
  
export default NavigationBar;
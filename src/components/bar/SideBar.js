import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <section className="side-container">
      <section className="side">
        <a className="side-items"> SNU CLS 21 </a>
        <a className="side-items"> Major in Computer Science and Mathematics </a>
        <a className="side-items"> Website: https://sagit25.github.io/react-website </a>
        <a className="side-items"> Email: sukhuny@snu.ac.kr </a>
        <a className="side-items"> Github: Sagit25 </a>
        <a className="side-items"> Last update: 2023.02.09 </a>
      </section>
      <div className="side-div-line"/>
    </section>
  );
}
  
export default SideBar;
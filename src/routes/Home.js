import { useState } from "react";
import Slider from "../Slider";
import { Link } from "react-router-dom";

function Home() {
  const [poms, setPoms] = useState("none");

  return (
    <div className="wrapper">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <img src="./img/logo.png" className="logo" />
            <ul className="nav__list">
              {
                <Link className="SectionNavigation-Item Section" to="/">
                  <li className="list__item bg-light">
                    <span className="Section-Title">Home</span>
                  </li>
                </Link>
              }

              <li className="list__item">Whitepapper</li>
              <li className="list__item">Marketplace</li>
              {
                <Link className="SectionNavigation-Item Section" to="/faq">
                  <li className="list__item">
                    <span className="Section-Title">FAQ</span>
                  </li>
                </Link>
              }
            </ul>
          </div>
          <div
            className="menu-burger"
            onClick={() => {
              setPoms(poms === "none" ? "block" : "none");
            }}
          >
            <img src="./img/burger.png" />
          </div>
        </nav>
        <div className="pull-out__menu" style={{ display: poms }}>
          <ul className="pull-out__list">
            <li className="pull-out__item">Stacking</li>
            <li className="pull-out__item">Tokenomics</li>

            {
              <Link className="SectionNavigation-Item Section" to="/roadmap">
                <li className="pull-out__item">
                  <span className="Section-Title">Roadmap</span>
                </li>
              </Link>
            }

            <li className="pull-out__item">Social</li>
            <li className="pull-out__item">Mint</li>
            <li className="pull-out__item">Sneak-peaks</li>
          </ul>
        </div>
      </header>
      <main
        className="main"
        onClick={() => {
          setPoms("none");
        }}
      >
        <div className="title__div">
          <span className="title__1">NOVAMIND</span>
          <span className="title__2">NEW PROJECT, NEW PEOPLE, NEW MIND</span>
        </div>
        <Slider />
      </main>
    </div>
  );
}

export default Home;

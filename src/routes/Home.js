import { useState } from "react";

function Home() {
  const [poms, setPoms] = useState("none");

  return (
    <div className="wrapper">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <img src="./img/logo.png" className="logo" />
            <ul className="nav__list">
              <li className="list__item bg-light">Home</li>
              <li className="list__item">Whitepapper</li>
              <li className="list__item">Marketplace</li>
              <li className="list__item">FAQ</li>
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
            <li className="pull-out__item">Roadmap</li>
            <li className="pull-out__item">Social</li>
            <li className="pull-out__item">Mint</li>
            <li className="pull-out__item">Sneak-peaks</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Home;

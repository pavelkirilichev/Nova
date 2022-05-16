import { useState } from "react";
import { Link } from "react-router-dom";

function Tokenomics() {
  const [poms, setPoms] = useState("none");

  const [main_opacity, setMainOpacity] = useState("");

  setInterval(() => {
    setMainOpacity(" main-opacity");
  }, 1);

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
        className={"main" + main_opacity}
        onClick={() => {
          setPoms("none");
        }}
      >
        <div className="title__div">
          <span className="title__1">TOKENOMICS</span>
        </div>
        <div className="container_token">
          <div className="puncts">
            <div className="puncts_left">
              <div className="punct">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/LIQUIDITY.png"
                    className="punct__img liquidity"
                  />
                  <span className="punct__text__inner">5000000</span>
                </div>
              </div>
              <div className="punct">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/STACKING.png"
                    className="punct__img stacking"
                  />
                  <span className="punct__text__inner">1750000</span>
                </div>
              </div>
              <div className="punct">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/TEAM.png" className="punct__img team" />
                  <span className="punct__text__inner">1000000</span>
                </div>
              </div>
              <div className="punct">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/LOCK. 2.png" className="punct__img lock_2" />
                  <span className="punct__text__inner">1000000</span>
                </div>
              </div>
            </div>
            <div className="puncts_right">
              <div className="punct">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/RESERVE.png" className="punct__img reserve" />
                  <span className="punct__text__inner">400000</span>
                </div>
              </div>

              <div className="punct liquidity_pool_div">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/LIQUIDITY POOL.png"
                    className="punct__img liquidity_pool"
                  />
                  <span className="punct__text__inner">350000</span>
                </div>
              </div>

              <div className="punct lock_3_div">
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/LOCK. 3.png" className="punct__img lock_3" />
                  <span className="punct__text__inner">500000</span>
                </div>
              </div>
            </div>
          </div>
          <img src="./img/token.png" className="token" />
        </div>
      </main>
    </div>
  );
}

export default Tokenomics;

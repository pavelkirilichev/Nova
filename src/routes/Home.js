import { useState } from "react";
import Slider from "../Slider";
import { Link } from "react-router-dom";

function Home() {
  const [poms, setPoms] = useState("none");
  const [burger_active, setBurgerActive] = useState("");
  const [main_opacity, setMainOpacity] = useState("");

  setInterval(() => {
    setMainOpacity(" main-opacity");
  }, 1);

  return (
    <div className="wrapper">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" style={{ height: 24 }}>
              <img src="./img/logo.png" className="logo" />
            </Link>

            <ul className="nav__list">
              {
                <Link className="SectionNavigation-Item Section" to="/">
                  <li className="list__item bg-light">
                    <span className="Section-Title">Home</span>
                  </li>
                </Link>
              }

              {
                <Link
                  className="SectionNavigation-Item Section"
                  to="/whitepaper"
                >
                  <li className="list__item">
                    <span className="Section-Title">Whitepapper</span>
                  </li>
                </Link>
              }

              {
                <Link
                  className="SectionNavigation-Item Section"
                  to="/marketplace"
                >
                  <li className="list__item">
                    <span className="Section-Title">Marketplace</span>
                  </li>
                </Link>
              }

              {
                <Link className="SectionNavigation-Item Section" to="/faq">
                  <li className="list__item">
                    <span className="Section-Title">FAQ</span>
                  </li>
                </Link>
              }
            </ul>
          </div>
          <div className="nav-right">
            <a
              className="SectionNavigation-Item Section"
              href="https://discord.gg/NHrePX8Uyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/discord_icon.png"
                className="nav-right__discord_icon"
              />
            </a>

            <a
              className="SectionNavigation-Item Section"
              href="https://twitter.com/novamindnft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/twitter_icon.png"
                className="nav-right__twitter_icon"
              />
            </a>
            <div
              className={"menu-burger" + burger_active}
              onClick={() => {
                setPoms(poms === "none" ? "block" : "none");
                setBurgerActive(" menu-burger_active");
              }}
            >
              <img src="./img/burger.png" />
            </div>
          </div>
        </nav>
        <div className="pull-out__menu" style={{ display: poms }}>
          <ul className="pull-out__list">
            {
              <Link className="SectionNavigation-Item Section" to="/mint">
                <li className="pull-out__item">
                  <span className="Section-Title">Mint</span>
                </li>
              </Link>
            }

            {
              <Link className="SectionNavigation-Item Section" to="/staking">
                <li className="pull-out__item">
                  <span className="Section-Title">Staking</span>
                </li>
              </Link>
            }
          </ul>
        </div>
      </header>
      <main
        className={"main" + main_opacity}
        onClick={() => {
          setPoms("none");
          setBurgerActive("");
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

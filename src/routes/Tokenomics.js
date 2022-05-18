import { useState } from "react";
import { Link } from "react-router-dom";

function Tokenomics() {
  const [poms, setPoms] = useState("none");
  const [burger_active, setBurgerActive] = useState("");
  const [main_opacity, setMainOpacity] = useState("");
  const [tokenIndex, SetToken] = useState("0");
  const [tokenActive, SetTokenActive] = useState(" token-active");

  setInterval(() => {
    setMainOpacity(" main-opacity");
  }, 1);

  function tokenUpdate(n) {
    SetTokenActive("");
    setTimeout(() => {
      SetTokenActive(" token-active");
    }, 50);
    SetToken(n);
  }

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
            {
              <Link className="SectionNavigation-Item Section" to="/">
                <img
                  src="./img/discord_icon.png"
                  className="nav-right__discord_icon"
                />
              </Link>
            }
            {
              <Link className="SectionNavigation-Item Section" to="/">
                <img
                  src="./img/twitter_icon.png"
                  className="nav-right__twitter_icon"
                />
              </Link>
            }
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
              <Link className="SectionNavigation-Item Section" to="/tokenomics">
                <li className="pull-out__item">
                  <span className="Section-Title">Tokenomics</span>
                </li>
              </Link>
            }

            {
              <Link className="SectionNavigation-Item Section" to="/roadmap">
                <li className="pull-out__item">
                  <span className="Section-Title">Roadmap</span>
                </li>
              </Link>
            }

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
          <span className="title__1">TOKENOMICS</span>
        </div>
        <div className="container_token">
          <div className="puncts">
            <div className="puncts_left">
              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("100");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/LIQUIDITY.png"
                    className="punct__img liquidity"
                  />
                  <span className="punct__text__inner">5000000</span>
                </div>
              </div>
              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("35");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/STACKING.png"
                    className="punct__img stacking"
                  />
                  <span className="punct__text__inner">1750000</span>
                </div>
              </div>
              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("20");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/TEAM.png" className="punct__img team" />
                  <span className="punct__text__inner">1000000</span>
                </div>
              </div>
              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("20");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/LOCK. 2.png" className="punct__img lock_2" />
                  <span className="punct__text__inner">1000000</span>
                </div>
              </div>
            </div>
            <div className="puncts_right">
              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("8");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/RESERVE.png" className="punct__img reserve" />
                  <span className="punct__text__inner">400000</span>
                </div>
              </div>

              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("7");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img
                    src="./img/LIQUIDITY POOL.png"
                    className="punct__img liquidity_pool"
                  />
                  <span className="punct__text__inner">350000</span>
                </div>
              </div>

              <div
                className="punct"
                onMouseEnter={() => {
                  tokenUpdate("10");
                }}
              >
                <img src="./img/roadmap_line.png" className="line" />
                <div className="punct__text">
                  <img src="./img/LOCK. 3.png" className="punct__img lock_3" />
                  <span className="punct__text__inner">500000</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src={"./img/token_" + tokenIndex + ".png"}
            className={"token" + tokenActive}
          />
        </div>
      </main>
    </div>
  );
}

export default Tokenomics;

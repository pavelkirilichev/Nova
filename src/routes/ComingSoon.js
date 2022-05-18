import { useState } from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
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
                  to="/comingsoon"
                >
                  <li className="list__item">
                    <span className="Section-Title">Whitepapper</span>
                  </li>
                </Link>
              }

              {
                <Link
                  className="SectionNavigation-Item Section"
                  to="/comingsoon"
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
          <div
            className={"menu-burger" + burger_active}
            onClick={() => {
              setPoms(poms === "none" ? "block" : "none");
              setBurgerActive(" menu-burger_active");
            }}
          >
            <img src="./img/burger.png" />
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
                  <span className="Section-Title">Whitepaper</span>
                </li>
              </Link>
            }

            {
              <Link className="SectionNavigation-Item Section" to="/comingsoon">
                <li className="pull-out__item">
                  <span className="Section-Title">Mint</span>
                </li>
              </Link>
            }

            {
              <Link className="SectionNavigation-Item Section" to="/comingsoon">
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
          <span className="title__1 coming_soon">COMING SOON</span>
        </div>
      </main>
    </div>
  );
}

export default ComingSoon;
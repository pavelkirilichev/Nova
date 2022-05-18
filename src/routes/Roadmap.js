import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Roadmap() {
  const [poms, setPoms] = useState("none");

  const [main_opacity, setMainOpacity] = useState("");
  const [burger_active, setBurgerActive] = useState("");

  setInterval(() => {
    setMainOpacity(" main-opacity");
  }, 1);

  const phase_1 = [
    {
      id: 0,
      title: "Discord Tracking bot",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL.",
      type: 1,
    },
    {
      id: 1,
      title: "Socials",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 1,
    },
    {
      id: 1,
      title: "Tokenomics",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 1,
    },
    {
      id: 1,
      title: "Roadmap",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 1,
    },
    {
      id: 2,
      title: "Website",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 1,
    },
    {
      id: 3,
      title: "Marketplace",
      text: "- Mint: Mint 1618 Electric Sheep.",
      type: 0,
    },
    {
      id: 4,
      title: "Whitepaper",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FLP.",
      type: 0,
    },
    {
      id: 5,
      title: "Minders’ mint",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FLP.",
      type: 0,
    },
  ];

  const phase_2 = [
    {
      id: 0,
      title: "Listing on ME",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FL.",
      type: 0,
    },
    {
      id: 1,
      title: "Solana mint utilities",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 0,
    },
    {
      id: 2,
      title: "Discord utilities",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep.",
      type: 0,
    },
    {
      id: 3,
      title: "Token liquidity",
      text: "- Mint: Mint 1618 Electric Sheep.",
      type: 0,
    },
    {
      id: 4,
      title: "Staking",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FLP.",
      type: 0,
    },
    {
      id: 5,
      title: "Roadmap v.2",
      text: "- Mint: Mint 1618 Electric Sheep. To protect the mental health of the sheep, we create a new launch style called Double FLP.",
      type: 0,
    },
  ];

  return (
    <div className="wrapper">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <img src="./img/logo.png" className="logo" />
            <ul className="nav__list">
              {
                <Link className="SectionNavigation-Item Section" to="/">
                  <li className="list__item">
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
          <span className="title__1">ROADMAP</span>
        </div>
        <div className="container">
          <div className="phase">
            <div className="phase__title">
              <img src="./img/phase-1.png" className="phase__title-1" />
              <span className="phase__title-2">PRE-MINT</span>
            </div>
            <div className="phase__main">
              {phase_1.map((item) => {
                let circle_class;
                if (item.type == 0) circle_class = " roadmap_check_mark";
                else circle_class = "";

                let img_src;
                let flag = 0;
                let index = item.id;
                if (phase_1[index] != phase_1[phase_1.length - 1]) {
                  index += 1;
                } else {
                  flag = 1;
                }

                if (phase_1[index].type == 0) {
                  img_src = "roadmap_line_punct";
                } else {
                  img_src = "roadmap_line";
                }

                if (flag == 1) {
                  img_src = "";
                }

                return (
                  <div className="phase__item">
                    <div className="phase__main__item">
                      <div className={"item__circle" + circle_class}>
                        <img src="./img/check_mark.png" />
                      </div>
                      <div className="item__text">
                        <div className="item__text__title">
                          <img src="./img/roadmap_arrow.png" />
                          <p>{item.title}</p>
                        </div>
                        <p className="item__text-inner">{item.text}</p>
                      </div>
                    </div>
                    <img
                      src={"./img/" + img_src + ".png"}
                      className="roadmap_line"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="phase phase-2">
            <div className="phase__title">
              <img src="./img/phase-2.png" className="phase__title-1" />
              <span className="phase__title-2">TOKEN ERA</span>
            </div>
            <div className="phase__main">
              {phase_2.map((item) => {
                let circle_class;
                if (item.type == 0) circle_class = " roadmap_check_mark";
                else circle_class = "";

                let img_src;
                let flag = 0;
                let index = item.id;
                if (phase_2[index] != phase_2[phase_2.length - 1]) {
                  index += 1;
                } else {
                  flag = 1;
                }

                if (phase_2[index].type == 0) {
                  img_src = "roadmap_line_punct";
                } else {
                  img_src = "roadmap_line";
                }

                if (flag == 1) {
                  img_src = "";
                }

                return (
                  <div className="phase__item">
                    <div className="phase__main__item">
                      <div className={"item__circle" + circle_class}>
                        <img src="./img/check_mark.png" />
                      </div>
                      <div className="item__text">
                        <div className="item__text__title">
                          <img src="./img/roadmap_arrow.png" />
                          <p>{item.title}</p>
                        </div>
                        <p className="item__text-inner">{item.text}</p>
                      </div>
                    </div>
                    <img
                      src={"./img/" + img_src + ".png"}
                      className="roadmap_line"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Roadmap;

import { useState } from "react";
import { Link } from "react-router-dom";

function Roadmap() {
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
      <main
        className="main"
        onClick={() => {
          setPoms("none");
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
              <div className="phase__main__item">
                <div className="item__circle">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Discord Tracking bot</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FL.
                  </p>
                </div>
              </div>
              <img src="./img/roadmap_line.png" className="roadmap_line" />
              <div className="phase__main__item">
                <div className="item__circle">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Tokenomics</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep.
                  </p>
                </div>
              </div>
              <img src="./img/roadmap_line.png" className="roadmap_line" />
              <div className="phase__main__item">
                <div className="item__circle">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Website</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep.
                  </p>
                </div>
              </div>
              <img src="./img/roadmap_line.png" className="roadmap_line" />
              <div className="phase__main__item">
                <div className="item__circle">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Marketplace</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Whitepaper</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FLP.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Minders’ mint</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FLP.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="phase phase-2">
            <div className="phase__title">
              <img src="./img/phase-2.png" className="phase__title-1" />
              <span className="phase__title-2">TOKEN ERA</span>
            </div>
            <div className="phase__main">
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Listing on ME</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FL.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Solana mint utilities</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Discord utilities</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Token liquidity</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Staking</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FLP.
                  </p>
                </div>
              </div>
              <img
                src="./img/roadmap_line_punct.png"
                className="roadmap_line"
              />
              <div className="phase__main__item">
                <div className="item__circle roadmap_check_mark">
                  <img src="./img/check_mark.png" />
                </div>
                <div className="item__text">
                  <div className="item__text__title">
                    <img src="./img/roadmap_arrow.png" />
                    <p>Roadmap v.2</p>
                  </div>
                  <p className="item__text-inner">
                    - Mint: Mint 1618 Electric Sheep. To protect the mental
                    health of the sheep, we create a new launch style called
                    Double FLP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Roadmap;

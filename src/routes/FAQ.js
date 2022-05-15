import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
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
                  <li className="list__item">
                    <span className="Section-Title">Home</span>
                  </li>
                </Link>
              }

              <li className="list__item">Whitepapper</li>
              <li className="list__item">Marketplace</li>
              {
                <Link className="SectionNavigation-Item Section" to="/faq">
                  <li className="list__item bg-light">
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
          <span className="title__1">FAQ</span>
        </div>
        <div className="container">
          <div className="faq__item">
            <span className="faq__item__title">1. NFT</span>
            <p className="faq__item__text">
              Stock : 1000. Price : 1.5 SOL. Utilities : Staking, marketplace
              discount, in discord tools from our marketplace
            </p>
          </div>
          <div className="faq__item">
            <span className="faq__item__title">2. Token $MindBrass</span>
            <p className="faq__item__text">
              Ways to get $MindBrass : Staking, giveaways, swap, more ways
              coming soon. Utilities : Lower prices for purchasing via
              $MindBrass in marketplace, software rental is available only for
              $MindBrass
            </p>
          </div>
          <div className="faq__item">
            <span className="faq__item__title">3. Marketplace</span>
            <p className="faq__item__text">
              Distribution of tokens received : Burn $MindBrass, other tokens
              swapping and going for $MindBrass liquidity. Expansion and
              replenishment of the assortment : We work hard in this direction
              and will try to replenish our assortment with various useful
              products
            </p>
          </div>
          <div className="faq__item">
            <span className="faq__item__title">4. Nova-tools</span>
            <p className="faq__item__text">
              Unique: This tools are 100% unique and developed by Novamind team.
              Access : To gain access, you can rent any software in the
              marketplace. Power : We cannot promise that this is the best
              software, because as you know, there is always someone better,
              beauty, and so on. But we can promise that we are doing everything
              to be among the best!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQ;

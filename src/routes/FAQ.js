import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
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
              <Link className="SectionNavigation-Item Section" to="/">
                <li className="list__item">
                  <span className="Section-Title">Home</span>
                </li>
              </Link>

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
                  <li className="list__item bg-light">
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

import { useState } from "react";
import Header from "../components/Header.js";

function Home() {
  const [poms, setPoms] = useState("none");

  return (
    <div className="wrapper">
      <Header />
      <main
        className="main"
        onClick={() => {
          setPoms("none");
        }}
      ></main>
    </div>
  );
}

export default Home;

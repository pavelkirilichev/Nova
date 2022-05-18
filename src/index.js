import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Whitepaper from "./routes/Whitepaper";
import Coming_soon from "./routes/Coming_soon";
import FAQ from "./routes/FAQ";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";
import Tokenomics from "./routes/Tokenomics";
import Marketplace from "./routes/Marketplace";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mint" element={<Coming_soon />} />
        <Route path="/staking" element={<Coming_soon />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

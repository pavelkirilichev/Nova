import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

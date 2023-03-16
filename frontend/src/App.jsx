import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculatrice from "./pages/Calculatrice";
import Config from "./pages/Config";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculatrice" element={<Calculatrice />} />
        <Route path="/configuration" element={<Config />} />
      </Routes>
    </div>
  );
}

export default App;

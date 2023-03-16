import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculatrice from "./pages/Calculatrice";
import Config from "./pages/Config";
import Guide from "./pages/Guide";
import ListPhones from "./pages/ListPhones";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculatrice" element={<Calculatrice />} />
        <Route path="/configuration" element={<Config />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/phones" element={<ListPhones />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Home from "./pages/Home";
import Calculatrice from "./pages/Calculatrice";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculatrice" element={<Calculatrice />} />
      </Routes>
    </div>
  );
}

export default App;

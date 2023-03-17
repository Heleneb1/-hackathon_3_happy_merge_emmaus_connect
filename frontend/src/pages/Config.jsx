import { useState } from "react";
import Header from "../components/Header";
import ConfigRam from "../components/ConfigMemoire";
import ConfigStockage from "../components/ConfigStockage";
import ConfigAntutu from "../components/ConfigAntutu";
import ConfigCategories from "../components/ConfigCategories";
import ConfigMini from "../components/ConfigMini";

export default function Config() {
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="leftbox">
          <nav>
            <div className="configMenu">
              <input
                type="submit"
                id="btn1"
                value="Valeurs Antutu"
                onClick={() => handleButtonClick("antutu")}
              />
            </div>
            <div className="configMenu">
              <input
                type="submit"
                id="btn2"
                value="Valeurs Mémoire"
                onClick={() => handleButtonClick("memoire")}
              />
            </div>
            <div className="configMenu">
              <input
                type="submit"
                id="btn3"
                value="Valeurs Stockage"
                onClick={() => handleButtonClick("stockage")}
              />
            </div>
            <div className="configMenu">
              <input
                type="submit"
                id="btn4"
                value="Catégories"
                onClick={() => handleButtonClick("categories")}
              />
            </div>
            <div className="configMenu">
              <input
                type="submit"
                id="btn5"
                value="Config Mini"
                onClick={() => handleButtonClick("mini")}
              />
            </div>
          </nav>
        </div>

        <div className="rightbox">
          <h1>Configuration des données téléphone</h1>
          {/* <ConfigRAM /> */}
          {/* <ConfigRam /> */}
          {/* <ConfigStockage /> */}
          {activeModal === "antutu" && (
            <ConfigAntutu onClose={handleCloseModal} />
          )}
          {activeModal === "memoire" && (
            <ConfigRam onClose={handleCloseModal} />
          )}
          {activeModal === "stockage" && (
            <ConfigStockage onClose={handleCloseModal} />
          )}
          {activeModal === "categories" && (
            <ConfigCategories onClose={handleCloseModal} />
          )}
          {activeModal === "mini" && <ConfigMini onClose={handleCloseModal} />}
        </div>
      </div>
    </>
  );
}

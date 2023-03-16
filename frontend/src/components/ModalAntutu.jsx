import { useState } from "react";

function ModalAntutu() {
  const [inputValue, setInputValue] = useState("");
  const [valA, setValA] = useState("");
  const setOpenModal = true;
  const intervallesIndice = [
    { min: 0, max: 50000, valA: 40 },
    { min: 50000, max: 100000, valA: 44 },
    { min: 100000, max: 150000, valA: 49 },
    { min: 150000, max: 200000, valA: 0 },
    { min: 200000, max: 250000, valA: 0 },
    { min: 250000, max: 300000, valA: 0 },
    { min: 300000, max: 350000, valA: 0 },
    { min: 350000, max: 400000, valA: 0 },
    { min: 400000, max: 450000, valA: 0 },
    { min: 450000, max: 500000, valA: 0 },
    { min: 500000, max: 550000, valA: 0 },
    { min: 550000, max: 600000, valA: 0 },
    { min: 600000, max: 650000, valA: 0 },
    { min: 650000, max: 700000, valA: 0 },
    { min: 700000, max: 750000, valA: 0 },
    { min: 750000, max: 800000, valA: 0 },
    { min: 800000, max: 850000, valA: 0 },
    { min: 850000, max: 900000, valA: 0 },
    { min: 900000, max: 950000, valA: 0 },
    { min: 950000, max: 0, valA: 0 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const valNum = parseFloat(inputValue);
    let correspondanceTrouvee = false;

    for (const intervalle of intervallesIndice) {
      if (valNum >= intervalle.min && valNum < intervalle.max) {
        setValA(intervalle.valA);
        correspondanceTrouvee = true;
        break;
      }
    }

    if (!correspondanceTrouvee) {
      setValA("");
    }
  };

  return (
    <div className="modalbg">
      <div className="modalContainer">
        <input
          type="button"
          value="X"
          className="bttn1"
          onClick={() => {
            setOpenModal(false);
          }}
        />

        <div className="modalName">
          <h2>Valeur Antutu</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {" "}
          {/* add form element and onSubmit function */}
          <div className="modalBody">
            <label>
              Saisissez une valeur :
              <input
                type="number"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
            </label>
          </div>
          <div className="modalFooter">
            <input
              type="button"
              value="Annuler"
              className="bbtn2"
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <button type="submit">Continuer</button>
          </div>
        </form>

        <div className="resultContainer">{valA && <p>ValA: {valA}</p>}</div>
      </div>
    </div>
  );
}

export default ModalAntutu;

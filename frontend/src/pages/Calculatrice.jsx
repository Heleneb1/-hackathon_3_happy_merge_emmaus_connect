import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import emmauslogo from "../assets/emmaus.png";

export default function Calculatrice() {
  const [AntinputValue, setAntInputValue] = useState("");
  const [memInputValue, setMemInputValue] = useState("");
  const [stockInputValue, setStockInputValue] = useState("");
  const [pondeInputValue, setPondeInputValue] = useState("");
  const [finalValue, setFinalValue] = useState(null);
  const [valA, setValA] = useState("");

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

  const valeurMemoire = [
    { ram: 0, value: null },
    { ram: 1, value: 30 },
    { ram: 2, value: 40 },
    { ram: 3, value: 54 },
    { ram: 4, value: 0 },
    { ram: 6, value: 0 },
    { ram: 8, value: 0 },
    { ram: 12, value: 0 },
    { ram: 16, value: 0 },
  ];
  const valeurStockage = [
    { stock: 0, value: null },
    { stock: 16, value: 31 },
    { stock: 32, value: 45 },
    { stock: 64, value: 66 },
    { stock: 128, value: 0 },
    { stock: 256, value: 0 },
    { stock: 512, value: 0 },
    { stock: 1000, value: 0 },
  ];
  const valeurPonderation = [
    { ponde: "0%", value: null },
    { ponde: "10%", value: 10 },
    { ponde: "5%", value: 5 },
    { ponde: "-5%", value: -5 },
    { ponde: "-10%", value: -10 },
    { ponde: "-50%", value: -50 },
    { ponde: "-100%", value: -100 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const valAnt = parseFloat(AntinputValue);
    let correspondanceTrouvee = false;

    for (const intervalle of intervallesIndice) {
      if (valAnt >= intervalle.min && valAnt < intervalle.max) {
        setValA(intervalle.valA);
        correspondanceTrouvee = true;
        break;
      }
    }

    if (!correspondanceTrouvee) {
      setValA(null);
    }
    // TODO
    if (valA === null || memInputValue === null || stockInputValue === null) {
      return null;
    }

    let telValue =
      parseInt(valA, 10) +
      parseInt(memInputValue, 10) +
      parseInt(stockInputValue, 10);
    telValue += parseInt(telValue * (pondeInputValue / 100), 10);

    let categorie = null;
    if (telValue < 90) {
      categorie = "1-HC";
    } else if (telValue >= 90 && telValue <= 164) {
      categorie = "2-C";
    } else if (telValue > 164 && telValue <= 254) {
      categorie = "3-B";
    } else if (telValue > 254 && telValue <= 375) {
      categorie = "4-C";
    } else if (telValue > 375) {
      categorie = "5";
    }
    if (categorie !== null) {
      setFinalValue({
        valeur: telValue.toFixed(2), // Arrondir à deux décimales
        categorie,
        ram: memInputValue,
        stockage: stockInputValue,
        indice_Ant: AntinputValue,
        ponderation: pondeInputValue,
      });
    }

    return null;
  };

  useEffect(() => {
    if (finalValue) {
      axios
        .post("http://localhost:5000/phones", finalValue) // Remplacez l'URL par celle de votre API
        .then((response) => {
          console.info("Données soumises avec succès:", response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la soumission des données:", error);
        });
    }
  }, [finalValue]);

  return (
    <div className="calcPage">
      <Header />
      <div className="calc">
        <div className="logo">
          <img src={emmauslogo} alt="logo emmaus" />
        </div>
        <div className="calcForm">
          <h1>Nouveau téléphone</h1>
          <form className="calculateForm" onSubmit={handleSubmit}>
            <label>
              <select
                className="selectInput"
                onChange={(e) => setMemInputValue(e.target.value)}
              >
                {valeurMemoire.map((vm) => {
                  return <option value={vm.value}>{vm.ram}</option>;
                })}
              </select>
              {/* {memInputValue} */}
            </label>
            <label>
              <select
                className="selectInput"
                onChange={(e) => setStockInputValue(e.target.value)}
              >
                {valeurStockage.map((vs) => {
                  return <option value={vs.value}>{vs.stock}</option>;
                })}
              </select>
              {/* {stockInputValue} */}
            </label>
            <label>
              <input
                className="selectInput"
                type="text"
                placeholder="Indice Antutu"
                value={AntinputValue}
                onChange={(event) => setAntInputValue(event.target.value)}
              />
            </label>
            <label>
              <select
                className="selectInput"
                onChange={(e) => setPondeInputValue(e.target.value)}
              >
                {valeurPonderation.map((vp) => {
                  return <option value={vp.value}>{vp.ponde}</option>;
                })}
              </select>
              {/* {pondeInputValue} */}
            </label>
            <div className="valider">
              <Link to="/tableau">
                <input type="submit" className="validButton" value="Valider" />
              </Link>
            </div>
          </form>
          {/* <div className="resultContainer">{valA && <p>ValA: {valA}</p>}</div> */}
        </div>
      </div>
    </div>
  );
}

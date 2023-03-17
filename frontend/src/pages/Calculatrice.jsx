import emmauslogo from "../assets/emmaus.png";
import Header from "../components/Header";

export default function Calculatrice() {
  return (
    <>
      <Header />
      <div className="calc">
        <div className="logo">
          <img src={emmauslogo} alt="logo emmaus" />
        </div>
        <div className="calcForm">
          <h1>Nouveau téléphone</h1>
          <form className="calculateForm">
            <label>
              <input type="text" placeholder="RAM" className="ram" />
            </label>
            <label>
              <input type="text" placeholder="Stockage" />
            </label>
            <label>
              <input type="text" placeholder="Indice Antutu" />
            </label>
            <label>
              <input type="text" placeholder="Pondération" />
            </label>
            <div className="valider">
              <input type="submit" className="validButton" value="Valider" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

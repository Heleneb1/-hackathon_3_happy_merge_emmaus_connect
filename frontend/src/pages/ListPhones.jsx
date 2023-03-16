import Header from "@components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListPhones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/phone")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  return (
    <div className="mainDivList">
      <Header />
      <div className="divListPhones">
        <div className="divListTable">
          <h1>Listes des téléphones</h1>
          <input type="submit" className="listExportButton" value="Export" />
          <div className="tableList">
            <div className="tableList-header">
              <div className="headerList-item">Marque</div>
              <div className="headerList-item">Modèle</div>
              <div className="headerList-item">RAM</div>
              <div className="headerList-item">Stockage</div>
              <div className="headerList-item">Ecran</div>
              <div className="headerList-item">Etat</div>
              <div className="headerList-item">Categorie</div>
            </div>
            {data.map((row) => (
              <div key={row.id} className="tableList-row">
                <div className="rowList-item">{row.marque}</div>
                <div className="rowList-item">{row.modele}</div>
                <div className="rowList-item">{row.ram}</div>
                <div className="rowList-item">{row.stockage}</div>
                <div className="rowList-item">{row.taille_ecran}</div>
                <div className="rowList-item">{row.etat}</div>
                <div className="rowList-item">{row.categorie}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

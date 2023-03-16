import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

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
              <div className="headerList-item">ID</div>
              <div className="headerList-item">IMEI</div>
              <div className="headerList-item">Donateur</div>
              <div className="headerList-item">Marque</div>
              <div className="headerList-item">Modèle</div>
            </div>
            {data.map((row) => (
              <div key={row.id} className="tableList-row">
                <div className="rowList-item">{row.id}</div>
                <div className="rowList-item">{row.imei}</div>
                <div className="rowList-item">{row.donateur}</div>
                <div className="rowList-item">{row.marque}</div>
                <div className="rowList-item">{row.modele}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { BiDownArrow } from "react-icons/bi";
import Papa from "papaparse";
import Header from "../components/Header";

export default function ListPhones() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);

        const uniqueCategories = Array.from(
          new Set(res.data.map((phone) => phone.categorie))
        );
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((phone) => phone.categorie === selectedCategory)
      );
    }
  }, [selectedCategory, data]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const exportToCSV = () => {
    const csvData = Papa.unparse(
      {
        fields: [
          "Marque",
          "Modèle",
          "RAM",
          "Stockage",
          "Ecran",
          "Etat",
          "Catégorie",
        ],
        data: filteredData.map((row) => [
          row.marque,
          row.modele,
          row.ram,
          row.stockage,
          row.taille_ecran,
          row.etat,
          row.categorie,
        ]),
      },
      {
        delimiter: ";",
      }
    );

    const blob = new Blob([`\uFEFF${csvData}`], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "telephones.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mainDivList">
      <Header />
      <div className="divListPhones">
        <div className="divListTable">
          <h1>Listes des téléphones</h1>
          <div className="filterPhonesContainer">
            <select
              id="categoryFilter"
              className="categoryFilterPhones"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Filtrer par catégories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="selectArrow">
              <BiDownArrow />
            </div>
          </div>
          <div className="tableList">
            <div className="tableList-header">
              <div className="headerList-item">Marque</div>
              <div className="headerList-item">Modèle</div>
              <div className="headerList-item">RAM</div>
              <div className="headerList-item">Stockage</div>
              <div className="headerList-item">Ecran</div>
              <div className="headerList-item">Etat</div>
              <div className="headerList-item">Catégorie</div>
            </div>
            {filteredData.map((row) => (
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
          <input
            type="submit"
            className="listExportButton"
            value="Export"
            onClick={exportToCSV}
          />{" "}
        </div>
      </div>
    </div>
  );
}

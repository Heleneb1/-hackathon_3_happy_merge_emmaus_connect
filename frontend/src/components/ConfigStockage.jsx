import { useState, useEffect } from "react";
import axios from "axios";
import exemple2 from "../assets/exemple2.png";

export default function ConfigStockage() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/stockage").then((response) => {
      setValues(response.data);
    });
  }, []);

  const handleValueChange = (id, field, value) => {
    setValues((prevValues) =>
      prevValues.map((val) =>
        val.id === id ? { ...val, [field]: value } : val
      )
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    values.forEach((value) => {
      axios
        .put(`http://localhost:5005/stockage/${value.id}`, value)
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="configStockage">
      <div className="modalTitle">
        <h3>Valeurs Stockage</h3>
      </div>
      <div className="exemple">
        <img src={exemple2} alt="exemple unités" />
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="maxibox">
          {values.map((value) => (
            <div className="row">
              <li key={value.id}>
                <span>
                  <input
                    className="gate"
                    id="move"
                    type="text"
                    value={value.valS}
                    onChange={(event) =>
                      handleValueChange(value.id, "valS", event.target.value)
                    }
                  />
                  <label htmlFor="class">
                    <input
                      type="text"
                      value={value.stockage}
                      onChange={(event) =>
                        handleValueChange(
                          value.id,
                          "stockage",
                          event.target.value
                        )
                      }
                    />
                  </label>
                </span>
              </li>
            </div>
          ))}
        </div>
        <div className="register2">
          <input type="submit" className="register" value="Enregistrer" />
        </div>
      </form>
    </div>
  );
}

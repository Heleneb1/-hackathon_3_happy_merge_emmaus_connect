import { useState, useEffect } from "react";
import axios from "axios";

export default function ConfigMini() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/ram").then((response) => {
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

  const handleFormSubmit = (event, id) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:5000/ram/${id}`,
        values.find((val) => val.id === id)
      )
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="configMini">
      <div className="modalTitle">
        <h3>Valeurs Mémoire</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <ul>
          {values.map((value) => (
            <li key={value.id}>
              <input
                type="text"
                value={value.memoire}
                onChange={(event) =>
                  handleValueChange(value.id, "memoire", event.target.value)
                }
              />
              <input
                type="text"
                value={value.valM}
                onChange={(event) =>
                  handleValueChange(value.id, "valM", event.target.value)
                }
              />
              <button
                type="submit"
                onClick={(event) => handleFormSubmit(event, value.id)}
              >
                Enregistrer
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

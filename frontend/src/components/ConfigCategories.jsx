import { useState, useEffect } from "react";
import axios from "axios";

export default function ConfigMini() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
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
        `http://localhost:5000/categories/${id}`,
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
        <h3>Catégories</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <ul>
          {values.map((value) => (
            <li key={value.id}>
              <input
                type="text"
                value={value.val_total_min}
                onChange={(event) =>
                  handleValueChange(
                    value.id,
                    "val_total_min",
                    event.target.value
                  )
                }
              />
              <input
                type="text"
                value={value.val_total_max}
                onChange={(event) =>
                  handleValueChange(
                    value.id,
                    "val_total_max",
                    event.target.value
                  )
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

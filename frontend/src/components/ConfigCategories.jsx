import { useState, useEffect } from "react";
import axios from "axios";

export default function ConfigCategories() {
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    values.forEach((value) => {
      axios
        .put(`http://localhost:5000/categories/${value.id}`, value)
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="ConfigCategories">
      <div className="modalTitle">
        <h3>Catégorisation des smrtphones</h3>
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
                    value={value.valM}
                    onChange={(event) =>
                      handleValueChange(value.id, "valM", event.target.value)
                    }
                  />
                  <label htmlFor="class">
                    <input
                      type="text"
                      value={value.memoire}
                      onChange={(event) =>
                        handleValueChange(
                          value.id,
                          "memoire",
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

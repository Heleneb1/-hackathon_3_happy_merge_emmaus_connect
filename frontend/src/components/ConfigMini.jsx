import { useState, useEffect } from "react";
import axios from "axios";

export default function ConfigMini() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/configmin").then((response) => {
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
        .put(`http://localhost:5000/configmin/${value.id}`, value)
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="configMini">
      <div className="modalTitle">
        <h3>ConfigMini pour être mis en vente</h3>
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
        <div className="row">
          <span>
            <input className="slide-up" id="card" type="text" placeholder="8" />
            <label htmlFor="card">Android</label>
          </span>
          <span>
            <input
              className="slide-up"
              id="expires"
              type="text"
              placeholder="2 GO"
            />
            <label htmlFor="expires">Ram</label>
          </span>
          <span>
            <input
              className="slide-up"
              id="security"
              type="text"
              placeholder="16 GO"
            />
            <label htmlFor="security">Mémoire</label>
          </span>
          <span>
            <input
              className="slide-up"
              id="card"
              type="text"
              placeholder="4p"
            />
            <label htmlFor="card">Ecran</label>
          </span>
          <span>
            <input
              className="slide-up"
              id="expires"
              type="text"
              placeholder="4G"
            />
            <label htmlFor="expires">Réseau</label>
          </span>
          <span>
            <input
              className="slide-up"
              id="security"
              type="text"
              placeholder="Mémoire"
            />
            <label htmlFor="security">Avec chargeur et cable</label>
          </span>
        </div>
        <div className="register2">
          <input type="submit" className="register" value="Enregistrer" />
        </div>
      </form>
    </div>
  );
}

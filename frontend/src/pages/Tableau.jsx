/* eslint-disable no-restricted-syntax, react/jsx-props-no-spreading */
// eslint-disable-next-line no-console
/* eslint-disable no-restricted-syntax, react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "../components/Header";

function Tableau() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/phones", data);
      console.log("Données soumises avec succès:", response.data);
      setMessage("Données enregistrées avec succès !");
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Erreur lors de la soumission des données:", error);
      setMessage("Données enregistrées avec succès !");
    }
  };

  return (
    <div>
      <Header />
      <div className="GlobalT">
        <div className="containerTableau">
          <form className="containerForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="inputForm"
              placeholder="ID Emmaus"
              {...register("id_emmaus_connect", { required: true })}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Donateur"
              {...register("donateur", { required: true })}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Marque"
              {...register("marque")}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Modele"
              {...register("modele")}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="IMEI"
              {...register("imei")}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Version Android"
              {...register("version_android")}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Ecran"
              {...register("taille_ecran", {})}
            />
            <select
              className="inputForm"
              placeholder="Reseau"
              {...register("reseau", {})}
            >
              <option>Selectionnez le réseau</option>
              <option value="3G">3G</option>
              <option value="4G">4G</option>
              <option value="5G">5G</option>
            </select>

            <select
              className="inputForm"
              type="text"
              placeholder="Catégorie"
              {...register("categorie", {})}
            >
              <option>Selectionnez l'état</option>
              <option value="1">DEEE</option>
              <option value="2">Bloqué</option>
              <option value="3">Reconditionnable</option>
              <option value="4">Reconditionné</option>
              <option value="5">Réparable</option>
            </select>
            <input className="buttonForm" type="submit" />
            <div className="divButtonTab">
              {message && <p className="confirmationMessage">{message}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tableau;

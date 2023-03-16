import { useForm } from "react-hook-form";

function Tableau() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Global">
      <div className="containerTableau">
        <form className="containerForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputForm"
            placeholder="ID"
            {...register("ID", { required: true })}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Donateur"
            {...register("Donateur", { required: true })}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Marque"
            {...register("Marque")}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Modele"
            {...register("Modele")}
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Ecran"
            {...register("Ecran", {})}
          />
          <select
            className="inputForm"
            placeholder="Reseau"
            {...register("Reseau", {})}
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
            {...register("Catégorie", {})}
          >
            <option>Selectionnez la catégorie</option>
            <option value="1">1 - HC</option>
            <option value="2">2 - C</option>
            <option value="3">3 - B</option>
            <option value="4">4 - A</option>
            <option value="5">5 - Premium</option>
          </select>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="buttonForm" type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Tableau;

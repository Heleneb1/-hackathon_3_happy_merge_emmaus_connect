import { useState } from "react";
import ModalAntutu from "../components/ModalAntutu";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="Modal">
      <h1>Cliquer ici</h1>
      <input
        className="openModalBtn"
        type="button"
        value="Ouvrir"
        onClick={() => {
          setOpenModal(true);
        }}
      />

      {openModal && <ModalAntutu setOpenModal={setOpenModal} />}
    </div>
  );
}

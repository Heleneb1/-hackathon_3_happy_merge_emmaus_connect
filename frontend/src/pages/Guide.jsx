import { HiOutlineDeviceMobile } from "react-icons/hi";

export default function Guide() {
  return (
    <div className="guide">
      <div className="guideBox">
        <h1>Guide d'utilisation du site</h1>
        <ul>
          <div className="listContainer">
            <div className="listIcon">
              <HiOutlineDeviceMobile />
            </div>
            <li>
              Après avoir entré vos identifiants (adresse mail + mot de passe),
              vous êtes automatiquement redirigé vers une page avec un
              formulaire.
            </li>{" "}
          </div>
          <div className="listContainer">
            <div className="listIcon">
              <HiOutlineDeviceMobile />
            </div>
            <li>
              Vous pouvez désormais saisir les informations du téléphone dont
              vous souhaitez calculer le prix en fonction de ses principales
              caractéristiques.
            </li>{" "}
          </div>
          <div className="listContainer">
            <div className="listIcon">
              <HiOutlineDeviceMobile />
            </div>
            <li>
              Une fois cette étape validée à l'aide du bouton en bas du
              formulaire, vous êtes redirigé vers une seconde page, où vous
              pourrez saisir les caractéristiques étendues du téléphone
              (donateur, modèle, marque...).
            </li>
          </div>
          <div className="listContainer">
            <div className="listIcon">
              <HiOutlineDeviceMobile />
            </div>
            <li>
              Après validation de cette seconde étape, vous allez voir
              s'afficher un tableau récapitulatif des différentes
              caractéristiques précédemment saisies. Le bouton "export" permet
              de remplir la base de données avec les informations aue vous aurez
              saisies.
            </li>{" "}
          </div>
          <div className="listContainer">
            <div className="listIcon">
              <HiOutlineDeviceMobile />
            </div>
            <li>
              En en-tête du site, vous avez également la possibilité de modifier
              les valeurs d'indices qui permettent de calculer le prix du
              téléphone, au cas où celles-ci viendraient à changer.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

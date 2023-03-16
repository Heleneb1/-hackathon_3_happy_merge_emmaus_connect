import { Link } from "react-router-dom";
import emmauslogo from "../assets/emmaus.png";

export default function Home() {
  // const handleClick = () => {
  //   alert("Un email vous a été envoyé pour générer un nouveau mot de passe");
  // };
  return (
    <div className="homeBody">
      <div className="background">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <div className="logo">
          <img src={emmauslogo} alt="logo emmaus" />
        </div>
      </div>
      <div className="form">
        <h2>Bienvenue</h2>
        <div className="label">
          <input type="email" placeholder="Adresse mail" />
        </div>
        <div className="label">
          <input type="password" placeholder="Mot de passe" className="label" />
        </div>
        <div className="valider">
          <Link to="/calculatrice">
            <input type="submit" className="validButton" value="Connexion" />
          </Link>
        </div>
        <p className="access">
          {/* onClick={handleClick} */}
          Mot de passe oublié ?
        </p>
      </div>
      {/* <div className="circle" />
      <div className="circle-1" />
      <div className="circle-2" /> */}
    </div>
  );
}

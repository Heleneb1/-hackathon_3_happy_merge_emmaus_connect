import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mainDivHeader">
      <div className="firstDivHeader">
        <Link to="/calculatrice" className="linkNavHeader">
          <div className="divItemNav">Ajout tel</div>
        </Link>
        <Link to="/guide" className="linkNavHeader">
          <div className="divItemNav">Guide d'utilisation</div>
        </Link>
      </div>
      <div className="secondDivHeader">
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Admin</div>
        </Link>
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Log out</div>
        </Link>
      </div>
    </div>
  );
}

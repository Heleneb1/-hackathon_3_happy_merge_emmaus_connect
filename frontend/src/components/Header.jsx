import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mainDivHeader">
      <div className="firstDivHeader">
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Ajout tel</div>
        </Link>
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Liste tel</div>
        </Link>
      </div>
      <div className="secondDivHeader">
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Config</div>
        </Link>
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">FAQ</div>
        </Link>
        <Link to="/" className="linkNavHeader">
          <div className="divItemNav">Log out</div>
        </Link>
      </div>
    </div>
  );
}

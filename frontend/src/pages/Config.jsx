export default function Config() {
  return (
    <div className="container">
      <div className="leftbox">
        <nav>
          <div className="configMenu">
            <input type="submit" id="btn1" value="Valeurs Antutu" />
          </div>
          <div className="configMenu">
            <input type="submit" id="btn2" value="Valeurs Mémoire" />
          </div>
          <div className="configMenu">
            <input type="submit" id="btn3" value="Valeurs Stockage" />
          </div>
          <div className="configMenu">
            <input type="submit" id="btn4" value="Catégories" />
          </div>
          <div className="configMenu">
            <input type="submit" id="btn5" value="Config Mini" />
          </div>
        </nav>
      </div>

      <div className="rightbox">
        <h1>Configuration des données téléphone</h1>
      </div>
    </div>
  );
}

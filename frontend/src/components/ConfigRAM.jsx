export default function ConfigRAM() {
  return (
    <div className="configMini">
      <div className="modalTitle">
        <h3>Valeurs Mémoire</h3>
      </div>
      {/* <div className="exemple">
        <span>
          <input className="exo" id="move" type="text" value="RAM" />
          <label for="class">Val M</label>
        </span>
      </div> */}
      <div className="row">
        <span>
          <input className="gate" id="move" type="text" value="30" />
          <label for="class">1</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="40" />
          <label for="element">2</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="54" />
          <label for="move">3</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="0" />
          <label for="move">4</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="0" />
          <label for="move">6</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="0" />
          <label for="move">8</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="0" />
          <label for="move">12</label>
        </span>
        <span>
          <input className="gate" id="move" type="text" value="0" />
          <label for="move">16</label>
        </span>
      </div>
      {/* <div className="row">
        <span>
          <input
            className="skinny"
            id="english"
            type="text"
            placeholder="Do you speak it?"
          />
          <label for="english">English</label>
        </span>
        <span>
          <input
            className="skinny"
            id="burger"
            type="text"
            placeholder="A Royale with cheese?"
          />
          <label for="burger">Burger</label>
        </span>
        <span>
          <input
            className="skinny"
            id="wallet"
            type="text"
            placeholder="Bad Mother****er"
          />
          <label for="wallet">Wallet</label>
        </span>
      </div> */}
      {/* <div className="row">
        <span>
          <input
            className="slide-up"
            id="card"
            type="text"
            placeholder="Fund me!"
          />
          <label for="card">Credit Card</label>
        </span>
        <span>
          <input
            className="slide-up"
            id="expires"
            type="text"
            placeholder="Month Day, Year"
          />
          <label for="expires">Expires</label>
        </span>
        <span>
          <input
            className="slide-up"
            id="security"
            type="text"
            placeholder="Public"
          />
          <label for="security">Security Code</label>
        </span>
      </div> */}
      <div className="register2">
        <input type="submit" className="register" value="Enregistrer" />
      </div>
    </div>
  );
}

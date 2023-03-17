const AbstractManager = require("./AbstractManager");

class EtatManager extends AbstractManager {
  constructor() {
    super({ table: "etat" });
  }

  insert(etat) {
    return this.database.query(
      `insert into ${this.table} (etat_phone) values (?)`,
      [etat.etat_phone]
    );
  }

  update(etat) {
    return this.database.query(`update etat set etat_phone =? where id = ?`, [
      etat.etat_phone,
      etat.id,
    ]);
  }
}

module.exports = EtatManager;

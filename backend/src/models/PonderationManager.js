const AbstractManager = require("./AbstractManager");

class PonderationManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(ponderation) {
    return this.database.query(
      `insert into ${this.table} (valeur) values (?)`,
      [ponderation.valeur]
    );
  }

  update(ponderation) {
    return this.database.query(
      `update ${this.table} set valeur = ? where id = ?`,
      [ponderation.valeur]
    );
  }
}

module.exports = PonderationManager;

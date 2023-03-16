const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    return this.database.query(
      `insert into ${this.table} (memoire, valM) values (?, ?)`,
      [ram.memoire, ram.valM]
    );
  }

  update(ram) {
    return this.database.query(
      `update ${this.table} set memoire = ?, valM = ? where id = ?`,
      [ram.memoire, ram.valM]
    );
  }
}

module.exports = RamManager;

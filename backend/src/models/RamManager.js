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
      `update ram set memoire = ?, valM = ? where id = ?`,
      [ram.memoire, ram.valM, ram.id]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = RamManager;

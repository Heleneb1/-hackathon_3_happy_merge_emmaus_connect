const AbstractManager = require("./AbstractManager");

class ConfigMinimaleManager extends AbstractManager {
  constructor() {
    super({ table: "config_minimale" });
  }

  insert(configMinimale) {
    return this.database.query(
      `insert into ${this.table} (android, ram, memoire, ecran, reseau) values (?, ?, ?, ?, ?)`,
      [
        configMinimale.android,
        configMinimale.ram,
        configMinimale.memoire,
        configMinimale.ecran,
        configMinimale.reseau,
      ]
    );
  }

  update(configMinimale) {
    return this.database.query(
      `update ${this.table} set android = ?, ram = ?, memoire = ?, ecran = ?, reseau = ? where id = ?`,
      [
        configMinimale.android,
        configMinimale.ram,
        configMinimale.memoire,
        configMinimale.ecran,
        configMinimale.reseau,
      ]
    );
  }
}

module.exports = ConfigMinimaleManager;

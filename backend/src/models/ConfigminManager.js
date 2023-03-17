const AbstractManager = require("./AbstractManager");

class ConfigminManager extends AbstractManager {
  constructor() {
    super({ table: "config_minimale" });
  }

  insert(configmin) {
    return this.database.query(
      `insert into ${this.table} (android, ram, memoire, ecran, reseau) values (?, ?, ?, ?, ?)`,
      [
        configmin.android,
        configmin.ram,
        configmin.memoire,
        configmin.ecran,
        configmin.resau,
      ]
    );
  }

  update(configmin) {
    return this.database.query(
      `update ${this.table} set android = ?, ram= ?, memoire= ?, ecran= ?, reseau= ? where id = ?`,
      [
        configmin.android,
        configmin.ram,
        configmin.memoire,
        configmin.ecran,
        configmin.resau,
        configmin.id,
      ]
    );
  }
}

module.exports = ConfigminManager;

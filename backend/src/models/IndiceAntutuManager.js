const AbstractManager = require("./AbstractManager");

class IndiceAntutuManager extends AbstractManager {
  constructor() {
    super({ table: "indice_Antutu" });
  }

  insert(indiceAntutu) {
    return this.database.query(
      `insert into ${this.table} (ant_min, ant_max, valA) values (?, ?, ?)`,
      [indiceAntutu.ant_min, indiceAntutu.ant_max, indiceAntutu.valA]
    );
  }

  update(indiceAntutu) {
    return this.database.query(
      `update ${this.table} set ant_min = ?, ant_max = ? where id = ?`,
      [indiceAntutu.ant_min, indiceAntutu.ant_max, indiceAntutu.valA]
    );
  }
}

module.exports = IndiceAntutuManager;

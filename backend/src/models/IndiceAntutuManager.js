const AbstractManager = require("./AbstractManager");

class IndiceAntutu extends AbstractManager {
  constructor() {
    super({ table: "indiceantutu" });
  }

  insert(indiceantutu) {
    return this.database.query(
      `insert into ${this.table} (ant_min, ant_max, valA) values (?,?,?)`,
      [indiceantutu.ant_min, indiceantutu.ant_max, indiceantutu.valA]
    );
  }

  update(indiceantutu) {
    return this.database.query(
      `update indiceantutu set ant_min = ? , ant_max = ? , valA = ?  where id = ?`,
      [
        indiceantutu.ant_min,
        indiceantutu.ant_max,
        indiceantutu.valA,
        indiceantutu.id,
      ]
    );
  }
}

module.exports = IndiceAntutu;

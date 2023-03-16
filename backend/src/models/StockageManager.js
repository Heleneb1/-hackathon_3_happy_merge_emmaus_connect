const AbstractManager = require("./AbstractManager");

class StockageManager extends AbstractManager {
  constructor() {
    super({ table: "stockage" });
  }

  insert(stockage) {
    return this.database.query(
      `insert into ${this.table} (stockage, valS) values (?, ?)`,
      [stockage.stockage, stockage.valS]
    );
  }

  update(stockage) {
    return this.database.query(
      `update ${this.table} set stockage = ?, valS = ? where id = ?`,
      [stockage.stockage, stockage.valS]
    );
  }
}

module.exports = StockageManager;

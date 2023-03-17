const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  insert(categorie) {
    return this.database.query(
      `insert into ${this.table} (val_total_min, val_total_max) values (?, ?)`,
      [categorie.val_total_min, categorie.val_total_max]
    );
  }

  update(categorie) {
    return this.database.query(
      `update ${this.table} set val_total_min = ?, val_total_max = ? where id = ?`,
      [categorie.val_total_min, categorie.val_total_max, categorie.id]
    );
  }
}

module.exports = CategoriesManager;

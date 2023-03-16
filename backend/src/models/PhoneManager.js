const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (marque, modele, ram, stockage, indice_Ant, ponderation, id_emmaus_connect, donateur, imei, taille_ecran, version_android, reseau, etat, categorie) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        phone.marque,
        phone.modele,
        phone.ram,
        phone.stockage,
        phone.indice_Ant,
        phone.ponderation,
        phone.id_emmaus_connect,
        phone.donateur,
        phone.imei,
        phone.taille_ecran,
        phone.version_android,
        phone.reseau,
        phone.etat,
        phone.categorie,
      ]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set marque = ?, modele = ?, marque = ?, stockage = ?, indice_Ant = ?, ponderation = ?, id_emmaus_connect = ?, donateur = ?, imei = ?, taille_ecran = ?, version_android = ?, reseau = ?, etat = ?, categorie = ? where id = ?`,
      [
        phone.marque,
        phone.modele,
        phone.marque,
        phone.stockage,
        phone.indice_Ant,
        phone.ponderation,
        phone.id_emmaus_connect,
        phone.donateur,
        phone.imei,
        phone.taille_ecran,
        phone.version_android,
        phone.reseau,
        phone.etat,
        phone.categorie,
      ]
    );
  }
}

module.exports = PhoneManager;

const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const phoneControllers = require("./controllers/phoneControllers");
const ramControllers = require("./controllers/ramControllers");
const stockageControllers = require("./controllers/stockageControllers");
const indiceAntutuControllers = require("./controllers/indiceAntutuControllers");
const etatControllers = require("./controllers/etatControllers");
const configminControllers = require("./controllers/configMinControllers");
const categoriesControllers = require("./controllers/categoriesControllers");

router.get("/indiceAntutu", indiceAntutuControllers.browse);
router.get("/indiceAntutu/:id", indiceAntutuControllers.read);
router.put("/indiceAntutu/:id", indiceAntutuControllers.edit);
router.post("/indiceAntutu", indiceAntutuControllers.add);
router.delete("/indiceAntutu/:id", indiceAntutuControllers.destroy);

router.get("/phones", phoneControllers.browse);
router.get("/phones/:id", phoneControllers.read);
router.put("/phones/:id", phoneControllers.edit);
router.post("/phones", phoneControllers.add);
router.delete("/phones/:id", phoneControllers.destroy);

router.get("/ram", ramControllers.browse);
router.get("/ram/:id", ramControllers.read);
router.put("/ram/:id", ramControllers.edit);
router.post("/ram", ramControllers.add);
router.delete("/ram/:id", ramControllers.destroy);

router.get("/stockage", stockageControllers.browse);
router.get("/stockage/:id", stockageControllers.read);
router.put("/stockage/:id", stockageControllers.edit);
router.post("/stockage", stockageControllers.add);
router.delete("/stockage/:id", stockageControllers.destroy);

router.get("/etat", etatControllers.browse);
router.get("/etat/:id", etatControllers.read);
router.put("/etat/:id", etatControllers.edit);
router.post("/etat", etatControllers.add);
router.delete("/etat/:id", etatControllers.destroy);

router.get("/configmin", configminControllers.browse);
router.get("/configmin/:id", configminControllers.read);
router.put("/configmin/:id", configminControllers.edit);
router.post("/configmin", configminControllers.add);
router.delete("/configmin/:id", configminControllers.destroy);

router.get("/categories", categoriesControllers.browse);
router.get("/categories/:id", categoriesControllers.read);
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

module.exports = router;

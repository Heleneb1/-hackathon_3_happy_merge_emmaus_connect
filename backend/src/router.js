const express = require("express");

const router = express.Router();

const indiceAntutuControllers = require("./controllers/indiceAntutuControllers");

router.get("/indiceAntutu", indiceAntutuControllers.browse);
router.get("/indiceAntutu/:id", indiceAntutuControllers.read);
router.put("/indiceAntutu/:id", indiceAntutuControllers.edit);
router.post("/indiceAntutu", indiceAntutuControllers.add);
router.delete("/indiceAntutu/:id", indiceAntutuControllers.destroy);

module.exports = router;

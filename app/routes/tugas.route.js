const dotEnv = require("dotenv");
const { Router } = require("express");

const tugasController = require("../controllers/tugas.controller");

const router = Router();
dotEnv.config();

router.post("/:karyawanid", tugasController.create);
router.get("", tugasController.list);
router.put("/:id", tugasController.update);
router.delete("/:id", tugasController.delete);

module.exports = router;

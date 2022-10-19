const dotEnv = require("dotenv");
const { Router } = require("express");

const karyawanController = require("../controllers/karyawan.controller");

const router = Router();
dotEnv.config();

router.post("", karyawanController.create);
router.get("", karyawanController.list);
router.put("/:id", karyawanController.update);
router.delete("/:id", karyawanController.delete);

module.exports = router;

module.exports.KARYAWAN_TABLE_NAME = "karyawan";
module.exports.KARYAWAN_MODEL_NAME = "Karyawan";

module.exports.KARYAWAN_HAS_MANY_TUGAS = {
  as: "tugas",
  foreignKey: "karyawanid",
};

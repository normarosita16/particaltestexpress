"use strict";
const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");
const {
  TUGAS_BELONGS_TO_KARYAWAN,
  TUGAS_MODEL_NAME,
  TUGAS_TABLE_NAME,
} = require("../fixtures/tugas.fixture");

module.exports = (sequelize, DataTypes) => {
  class Tugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Karyawan, TUGAS_BELONGS_TO_KARYAWAN);
    }
  }
  Tugas.init(
    {
      id: { allowNull: true, primaryKey: true, type: DataTypes.UUID },
      karyawanid: DataTypes.UUID,
      title: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: TUGAS_MODEL_NAME,
      tableName: TUGAS_TABLE_NAME,
    }
  );

  Tugas.beforeCreate((model, options) => {
    return (model.id = uuidv4());
  });

  return Tugas;
};

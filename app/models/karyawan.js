"use strict";
const { v4: uuidv4 } = require("uuid");
const { Model, Op } = require("sequelize");
const {
  KARYAWAN_HAS_MANY_TUGAS,
  KARYAWAN_MODEL_NAME,
  KARYAWAN_TABLE_NAME,
} = require("../fixtures/karyawan.fixture");

module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Tugas, KARYAWAN_HAS_MANY_TUGAS);
    }
  }
  Karyawan.init(
    {
      id: { allowNull: true, primaryKey: true, type: DataTypes.UUID },
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: KARYAWAN_MODEL_NAME,
      tableName: KARYAWAN_TABLE_NAME,
    }
  );

  Karyawan.beforeCreate((model, options) => {
    return (model.id = uuidv4());
  });

  return Karyawan;
};

const { TUGAS_TABLE_NAME } = require("../fixtures/tugas.fixture");
const { KARYAWAN_TABLE_NAME } = require("../fixtures/karyawan.fixture");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TUGAS_TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      karyawanid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: KARYAWAN_TABLE_NAME,
          },
          key: "id",
        },
      },

      title: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TUGAS_TABLE_NAME);
  },
};

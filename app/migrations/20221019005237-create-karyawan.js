const { KARYAWAN_TABLE_NAME } = require("../fixtures/karyawan.fixture");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(KARYAWAN_TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      nama: {
        type: Sequelize.STRING,
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(KARYAWAN_TABLE_NAME);
  },
};

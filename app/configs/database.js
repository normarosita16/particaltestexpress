require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    // username: "root",
    password: process.env.DB_PASSWORD,
    // password: "",
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    // host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
    //migrationStorageTableSchema: "public",
    //schema: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    // port: "3306",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: "+07:00",
    //migrationStorageTableSchema: "public",
    //schema: process.env.MYSQL_SCHEMA,
    port: process.env.DB_PORT,
  },
};

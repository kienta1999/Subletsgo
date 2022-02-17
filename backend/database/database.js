const Sequelize = require('sequelize');

const sequelize = new Sequelize("subletsgo", "root", "helloVN84", {
    dialect: "mysql",
    host: "localhost",
});

sequelize.sync().then(result => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
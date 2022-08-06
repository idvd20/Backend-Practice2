const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

const connection = new Sequelize("test", "root", "", {
	host: "localhost",
	port: 8080,
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

connection.sync({ force: false, alter: false }).then(() => {
	console.log("Table Created");
});

module.exports = connection;

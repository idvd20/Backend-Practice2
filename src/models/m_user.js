const connection = require("../helper/database");

const { DataTypes } = require("sequelize");

const User = connection.define(
	"users",
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = User;

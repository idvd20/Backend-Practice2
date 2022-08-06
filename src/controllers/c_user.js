const User = require("../models/m_user");

const addUser = async (req, res) => {
	try {
		let createUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
		});

		await createUser.save();

		return res.send(`User account for ${req.body.firstName} is created`);
	} catch (error) {
		console.log(error);
		return res.status(400).send(`Could not create ${req.body.firstName}`);
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await User.findAll();

		return res.send(users);
	} catch (error) {
		console.log(error);
		return res.status(400).send(`${error}!`);
	}
};

const findUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const user = await User.findByPk(userId);

		return res.send(user);
	} catch (error) {
		console.log(error);
		return res.status(400).send(`User ${userId} not found`);
	}
};

const updateUser = async (req, res) => {
	try {
		await User.update(
			{
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
		return res.send(`Updated ${req.body.firstName}'s account`);
	} catch (error) {
		console.log(error);
		return res.status(400).send(`User ${req.params.id} not found`);
	}
};

const deleteUser = async (req, res) => {
	try {
		await User.destroy({
			where: {
				id: req.params.id,
			},
		});

		return res.send(`Deleted ${req.body.firstName}'s account`);
	} catch (error) {
		console.log(error);
		return res.status(400).send(`User ${req.params.id} not found`);
	}
};

module.exports = { addUser, getUsers, findUser, updateUser, deleteUser };

const {
	addUser,
	getUsers,
	findUser,
	updateUser,
	deleteUser,
} = require("../controllers/c_user");
const express = require("express");
const router = express("router");

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.get("/finduser/:id", findUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;

const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const { readdirSync } = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

readdirSync("./src/routes").map((r) => {
	app.use("/api", require("./src/routes/" + r));
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

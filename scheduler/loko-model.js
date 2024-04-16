const mongoose = require("mongoose");

const lokomotifSchema = new mongoose.Schema({
	kodeLoko: { type: String, required: true },
	namaLoko: { type: String, required: true },
	dimensiLoko: { type: String, required: true },
	status: { type: String, required: true },
	tanggal: { type: String, required: true },
	jam: { type: String, required: true },
});

const Lokomotif = mongoose.model("lokomotif", lokomotifSchema);

module.exports = {Lokomotif}; 
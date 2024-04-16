const express = require("express");
const bodyParser = require("body-parser");
const { sendMessageToKafka } = require("./kafka-producer");
const { runConsumer } = require("./kafka-consumer");
const mongoose = require("./mongodb"); 

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Endpoint untuk menerima data dari Java Spring Boot
app.post("/api/receive-data", (req, res) => {
	const receivedData = req.body;
	// Kirim data ke Kafka
	sendMessageToKafka("loko-data", receivedData);
	res.send("Data received and sent to Kafka");
});

// Menunggu koneksi MongoDB berhasil
mongoose.connection.on("connected", () => {
	// Setelah koneksi berhasil, baru start server Express.js dan jalankan konsumen Kafka
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
		runConsumer();
	});
});




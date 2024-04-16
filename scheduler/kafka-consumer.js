const { Kafka } = require("kafkajs");
const { Lokomotif } = require("./loko-model.js");
const mongoose = require("mongoose");

const kafka = new Kafka({
	clientId: "loko-scheduler",
	brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "my-loco-group" });

const runConsumer = async () => {
	await consumer.connect();
	await consumer.subscribe({ topic: "loko-data", fromBeginning: true });
	console.log("Consumer is running");
	await consumer.run({
		eachMessage: async ({ message }) => {
			try {
				const receivedData = JSON.parse(message.value.toString());
				for (const data of receivedData) {
					const { kodeLoko, namaLoko, dimensiLoko, status, tanggal, jam } = data;

					// Konversi format tanggal dan jam
					const formattedTanggal = tanggal.join("-");
					const formattedJam = jam
						.slice(0, 3)
						.map((num) => num.toString().padStart(2, "0"))
						.join(":");

					// Buat objek Lokomotif baru dengan data yang telah diubah
					const newLokomotif = new Lokomotif({
						kodeLoko: kodeLoko,
						namaLoko: namaLoko,
						dimensiLoko: dimensiLoko,
						status: status,
						tanggal: formattedTanggal,
						jam: formattedJam,
					});

					// Simpan objek Lokomotif ke MongoDB
					await newLokomotif.save();
					console.log("Data berhasil disimpan ke MongoDB");
				}
			} catch (error) {
				console.error("Error processing message:", error);
			}
		},
	});
};

module.exports = {
	runConsumer,
};
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
	clientId: "loko-scheduler",
	brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const sendMessageToKafka = async (topic, message) => {
	await producer.send({
		topic: topic,
		messages: [{ value: JSON.stringify(message) }],
	});
};

producer
	.connect()
	.then(() => console.log("Kafka Producer connected"))
	.catch((err) => {
		console.error("Error connecting Kafka Producer:", err);
		process.exit(1); // Keluar dari aplikasi jika tidak dapat terhubung ke Kafka
	});

module.exports = {
	sendMessageToKafka,
};
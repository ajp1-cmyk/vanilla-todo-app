const mongoose = require("mongoose");
const connectDB = async () => {
	await mongoose.connect("mongodb+srv://admin:admin@cluster0.55dp2fz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
	console.log("DB connected");
}
module.exports = connectDB;


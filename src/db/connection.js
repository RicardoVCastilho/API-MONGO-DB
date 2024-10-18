const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ricardovitor08:${process.env.MONGO_DB_KEY}@cluster0.wq47f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error to connect to database');
    }
};

module.exports = { connect };
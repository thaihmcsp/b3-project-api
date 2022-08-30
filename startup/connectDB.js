const mongoose = require('mongoose');

exports.connectDB = async () => {
    await mongoose.connect('mongodb://localhost/shope');
    console.log('mongoDB connected');
} 
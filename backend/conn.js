const mongoose = require('mongoose');

const URL = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Connection object
const db = mongoose.connection;

// Success log
db.on('connected', () => {
    console.log('✅ MongoDB connected successfully');
});

// Error log
db.on('error', (err) => {
    console.error('❌ DB ERROR:', err);
});

// Disconnection log (optional but useful)
db.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});

module.exports = { db, mongoose };
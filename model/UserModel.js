const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Username: String,
    Email: String,
    Password: String,
    Role: String
});

module.exports = mongoose.model('User', UserSchema);


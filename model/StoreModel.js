const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
   Name: String,
   OwnerID: String,
   Location: String

});

module.exports = mongoose.model('Store', StoreSchema);
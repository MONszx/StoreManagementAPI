const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
   Name: String,
   OwnerID: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
   },
   Location: String

});

module.exports = mongoose.model('Store', StoreSchema);
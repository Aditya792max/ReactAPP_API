const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
     uName: { type: String, required: true },
     uEmail: { type: String, required: true, unique: true },
     uphoneNo: { type: String, required: true },
}, {
     collection: 'userDetails',
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);
module.exports = UserDetails;

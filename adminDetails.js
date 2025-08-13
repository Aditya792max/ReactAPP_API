// adminDetails.js
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
     aName: { type: String, required: true },
     aEmail: { type: String, required: true, unique: true },
     aphoneNo: { type: String, required: true }
});
module.exports = mongoose.model('Admin', adminSchema);
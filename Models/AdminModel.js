const mongoose = require('mongoose');
const schema = mongoose.Schema;
const adminSchema = new schema({
    name:{type:String , required:true}
});
module.exports = mongoose.model('Admin',adminSchema);

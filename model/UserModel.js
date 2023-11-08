const mongoose=require('mongoose');
const userschema= new mongoose.Schema({
    name:String,
    dob:String,
    email:String,
    pass:String,
    mobile:String,
    add:String,

})
const user=mongoose.model('details',userschema);
module.exports=user;
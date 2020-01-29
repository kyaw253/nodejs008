var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcryptjs');
var AdminSchema =new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});
AdminSchema.pre('save',function (next) {
  this.password=bcrypt.hashSync(this.password,bcrypt.genSaltSync(8),null);
  next();
});
AdminSchema.statics.compare=function (cleartext,encrypted) {
  return bcrypt.compareSync(cleartext,encrypted);
}
module.exports=mongoose.model('Admins',AdminSchema);

const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    fax: {
      type: String,
      // required: true,
    },
    website:{
      type:String,
    },
    createdAt:{
      type:"String"
    },
    timezone:{
      type : String ,
    },
    bname:{
      type : String ,
    },
    blname:{
      type:String,
    },
    baddress:{
      type:String
    },
    bcity:{
      type:String
    },
    bstate:{
      type:String
    },
    bzip:{
      type:String
    },
    ccard:{
      type:String
    },
    cvv:{
      type:String
    },
    expirydate:{
      type:String
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    mobile: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    confirmPassword: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    manualcreditreport: {
      type: String,
    },
    mfsnusername:{
      type:String
    },
    mfsnpassword:{
      type:String
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};


//Export the model
module.exports = mongoose.model("User", userSchema);


  // firstname:jon
  // fax:1
  // website:www.web.com
  // timezone:india
  // bname:bala
  // blname:?
  // baddress:indore
  // bcity:indore
  // bstate:MP
  // bzip:?
  // ccard:master
  // cvv:123
  // expirydate:23
  // email:test@gmail.com
  // mobile:7566985221
  // password:user
  // address:indore
  // manualcreditreport:grt
  // mfsnusername:user
  // mfsnpassword:123


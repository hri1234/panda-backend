const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      // required: true,
      trim: true,
    },
    lname: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
    },
    birth: {
      type: String,
      // required: true,
    },
    snumber: {
      type: Number,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    streetnumber: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    zip: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    clientusername:{
      type : String,
      
    },
    password: {
      type: String,
      // required: true,
    },
    cpassword:{
      type:String,

    },
    notes:{
      type:String
    },
    creditreport:{
      type:String
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
    state: {
      type: Number,
   
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
   
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);

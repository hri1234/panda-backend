const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var creditorsSchema = new mongoose.Schema(
  {
    particulars: {
      type: String,
      required: true,
      
    },
    debit: {
      type: Number,
      required: true,
     
    },
    credit: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
})

//Export the model
module.exports = mongoose.model("Creditors",creditorsSchema);

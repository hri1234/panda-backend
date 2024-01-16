const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
  {
    sclient: {
      type: String,
      
    },
    screport: {
      type: String,
      
    },
    worktoexecute:{
      type: String,
    }
    utdestination: {
      type: String,
      
    },
    noinquiries: {
      type: String,
      
    },
    noaccount: {
      type: String,
      
    },
    excludeall: {
      type: String,
      
    },
    hideposition: {
      type: String,
      
    },
    documentoption: {
      type: String,
      
    },
    documentdestination: {
      type: String,
      
    },
    inquirydecis: {
      type: String,
      
    },
    Stringofinquiries: {
      type: String,
      
    },
    decision: {
      type: String,
      
    },
    typesofreportissues:{
      type:String
    },
    decision1:{
      type:String
    },
    decision2:{
      type:String
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    addimage: {
      type: String,
      default: "Admin",
    },
    images: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Blog", blogSchema);

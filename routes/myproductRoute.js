const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,

} = require("../controller/myproductCtrl");
//const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/:id", getaProduct);

router.post("/",
    upload.fields([{ name: 'images' }, { name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }, { name: 'image5' }, { name: 'image6' }]),
    createProduct)

router.put("/:id",
    upload.fields([{ name: 'images' }, { name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }, { name: 'image5' }, { name: 'image6' }]),
    updateProduct)

router.delete("/:id", deleteProduct);

router.get("/", getAllProduct);

module.exports = router;

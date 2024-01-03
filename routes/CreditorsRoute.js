const express = require("express");
const {
    createCreditors,
    getaCreditors,
    getAllCreditors,
    updateCreditors,
    deleteCreditors,
} = require("../controller/CreditorsCtrl");
//const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createCreditors);

router.get("/:id", getaCreditors);


router.put("/:id", updateCreditors);
router.delete("/:id", deleteCreditors);

router.get("/", getAllCreditors);

module.exports = router;

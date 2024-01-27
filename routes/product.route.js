const express = require("express");
const router = express.Router();
const {} = require("../validations/auth.validate");
const {validate} = require("../services/validate.service");
const {authorizeAdmin, authorizeUser} = require("../services/authenticate.service");
const productCtl = require("../controllers/product.control")

router.post("/add-product", authorizeAdmin, productCtl.addProduct);
router.get("/all-products", authorizeUser, productCtl.getAllProducts);

module.exports = router;

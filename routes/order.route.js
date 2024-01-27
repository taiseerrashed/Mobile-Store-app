const express = require("express");
const router = express.Router();
const {} = require("../validations/auth.validate");
const {validate} = require("../services/validate.service");
const {authorizeAdmin, authorizeUser} = require("../services/authenticate.service");
const orderCtl = require("../controllers/order.control")

router.post("/add-order", authorizeUser, orderCtl.addOrder);
router.get("/all-orders", authorizeUser, orderCtl.getAllOrders);

module.exports = router;

const authRoutes = require("./auth.route");
const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");
const storeRoutes = require("./store.route");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/store", storeRoutes);

module.exports = router;

const asyncHandler = require("express-async-handler");
const Order = require("../models/order.model");
const mongoose = require("mongoose");

const orderCtl = {
    addOrder: asyncHandler(async (req, res)=>{
        let data = req.body;
        if(!mongoose.isValidObjectId(data.product)){
            return res.status(400).send({
                message: "Product Id must be valid Object Id !"
            });
        }
        let newOrder = new Order({...data, user: req.user._id});
        await newOrder.save();
        res.status(201).send({message: "Order created"})
    }),
    getAllOrders: asyncHandler(async (req, res)=>{
        let data = await Order.find().populate("user").populate("product");
        res.send(data);
    })
};

module.exports = orderCtl;
const asyncHandler = require("express-async-handler");
const Store = require("../models/store.model");

const storeControl = {
    addStore: asyncHandler(async (req, res) => {
        let newStore = new Store(req.body);
        let file = req.file;
        if(file){
            let fileName = "/api/images/store" + file.filename;
            newStore.logo = fileName;
        }
        await newStore.save();
        res.send({message: "Store created"});
    }),
    deleteStore: asyncHandler(async (req, res) => {
        await Store.findByIdAndDelete(req.params.id);
        res.send({message: "Store deleted"});
    }),
};


module.exports = storeControl;
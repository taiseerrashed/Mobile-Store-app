const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fs = require("fs");

const storeSchema = new Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    logo: { type: String, trim: true, default: "/api/images/store/default.png" },
});

storeSchema.pre("findOneAndDelete" , async function(next){
    const document = await this.model.findOne(this.getQuery());
    if(document && document.logo){
        const logo = document.logo;
        const imageName = logo.split("/")[4];
        console.log(imageName);
        fs.unlink("./uploads/store/" + imageName , (err) => {
            if(err){
                console.log(err.message);
            }else{
                console.log("Image Deleted");
            }
        });
    }
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
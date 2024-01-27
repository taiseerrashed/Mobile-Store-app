const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true , unique: true},
    password: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    nationalId: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    isAdmin: {type: Boolean, default: false},
    store: { type: mongoose.Types.ObjectId, required: true, ref: "Store" }
});

userSchema.pre("save", async function(next){
    try {
        let user = this;
        if(!user.isModified("password")){
            return next();
        }
        if(!mongoose.isValidObjectId(user.store)){
            return next("Invalid object id for store");
        }
        let hashedPassword = await bcrypt.hash(user.password , 8);
        user.password = hashedPassword; 
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password , this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;
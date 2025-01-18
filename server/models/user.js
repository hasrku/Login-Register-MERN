const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, unique: true, required: true },
});

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;

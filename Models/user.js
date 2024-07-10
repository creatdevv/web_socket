const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoos.Schema({
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema);
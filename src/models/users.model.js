const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;




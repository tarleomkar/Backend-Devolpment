import mongoose from "monggose";

const userSchema = new monggose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const User = monggose.model("User", userSchema);
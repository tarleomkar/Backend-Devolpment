// require('dotenv').config({path: './env'})
// improved version
import dotenv from 'dotenv';
import connectDB from '../db/index.js';

// Load environment variables
dotenv.config({ path: './env' });

// Connect to the database
connectDB();


/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants"

import express from "express"
const app = express();

// ;(async () => {})()
// iife
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ", error);
        throw err
    }
})()
*/
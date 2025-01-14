const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ServerMonitoringMode } = require('mongodb');
require('dotenv').config();
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('db connected');
        // const app = express();

        // Define a Schema
        const userSchema = new mongoose.Schema({
            email: { type: String, required: true },
            username: { type: String, required: true },
            password: { type: String, required: true },
        });
        app.use(cors({
            credentials: true,
            origin: 'http://127.0.0.1:3000',
        }));
        
        // Define a Model
        const userInfo = mongoose.model('userInfo', userSchema);
        //route
        app.post('/register',async(req, res) => {
            try {
                const {username, email, password} = req.body;

                const newUser = new userInfo({username, email, password})
                const savedUser = await newUser.save();
                console.log(savedUser);
                //onst userInfo = new Message({ content: "hi" });
               // await message.save();
               // console.log("Static message saved to database:", message);
            } catch (err) {
               // console.error("Error saving static message:", err.message);
               console.error(err.savedUser);
            }
        });
        

        app.listen(5000, () => {
            console.log('Server running on http://127.0.0.1:5000');
        });
    });    

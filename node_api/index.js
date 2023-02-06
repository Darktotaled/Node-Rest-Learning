const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/dog_api';
const cors = require('cors');
const router = require('./routes/pets')

async function connectDb(){
    try {
        await mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
        
    } catch (error) {
        console.error(error);
    }
}
connectDb()

const dogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number})

    const Dog = mongoose.model('Dog', dogSchema)

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);})
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/dog_api';

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

const dogs =[
    {name:'Jimbob',breed: "husky"},
    {name:'Sam',breed: 'Lab'}
]

app.get("/dogs",async (req, res)=>{
    const response = await Dog.find({}).lean()
    console.log(response)
    res.status(200).send(response)

})

app.get("/dogs/:id",(req, res) =>{
    Dog.findById(req.params.id,(err,dog)=>{

        res.json(dogs)
    })
})

app.post("/dogs",async (req, res)=>{
    const response = await new Dog(req.body).save()
    res.status(200).send(response)
})

app.put("/dogs/:id",(req, res)=>{
    console.log(req.params.id)
    res.json({message:`updating dog ${req.params.id}`})
})

app.delete("/dogs/:id",(req, res)=>{
    console.log(req.params.id)
    res.json({message:`deleting dog ${req.params.id}`})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);})
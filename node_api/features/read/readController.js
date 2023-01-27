const pet = {};
pet.pets = require('../../model/dataPet.json')

const readPet = (req, res)=>{
    res.json(pet.pets);
}

const readPetById = (req, res) =>{
    res.json({'id': req.params.id})
    }

    module.exports ={
        readPet,
        readPetById
    }
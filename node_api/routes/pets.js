const express = require('express');
const addPet = require('../features/create/createController');
const deletePet = require('../features/delete/deleteController');
const { readPet, readPetById } = require('../features/read/readController');
const updatePet = require('../features/update/updateController');
const router = express.Router();


router.route('/')
    .get(readPet)
    .post(addPet)
    .put(updatePet)
    .delete(deletePet);

router.route('/:id')
    .get(readPetById);

module.exports = router;
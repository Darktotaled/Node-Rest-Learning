const updatePet = (req, res)=>{
    res.json({
        "name":req.body.name,
        "breed":req.body.breed,
        "age": req.body.age
    })
}

module.exports = updatePet;
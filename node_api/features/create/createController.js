

const addPet = (req, res)=>{
        res.json({
            "name":req.body.name,
            "breed":req.body.breed
        })
    }

module.exports = addPet;
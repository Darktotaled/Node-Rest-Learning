const deletePet = (req, res) =>{
    res.json({'id': req.body.id})
    }

    module.exports = deletePet;
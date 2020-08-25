const Artists = require('../models/artists');

exports.all = (req, res) => {
    Artists.all((err, docs) =>{
        if(err) {
            console.log(err);
            return res.SendStatus(500);
        }
            res.send(docs)
    })
}

exports.findById = (req, res) => {
    const {id} = req.params;
    Artists.findById(id, (err, docs) => {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
         res.send(docs);
    })
}

exports.delete = (req, res) => {
    const {id} = req.params;
    Artists.delete(id, (err, docs) => {
        if(err){
            console.log(err)
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.putOne = (req, res) => {
    const {id} = req.params;
    const name = req.body.name;
    Artists.putOne(id, name, (err, docs)=>{
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })


}
exports.postOne = (req, res) => {
    const atrist = {
        name: req.body.name
    }
    Artists.postOne(atrist, (err, docs) =>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(atrist);
    })
}
const db = require('../db');
const e = require('express');
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

exports.all = (cb) =>{
    db.get().collection('artists').find().toArray((err, docs) =>{
        cb(err, docs)
    })
}

exports.findById = (id, cb) =>{
    db.get().collection('artists').findOne({_id: ObjectId(id)}, (err, docs) =>{
        cb(err, docs);
    })

}

exports.delete = (id, cb) => {
    db.get().collection('artists').deleteOne({_id: ObjectId(id)}, (err, docs) => {
        cb(err, docs);
    });
}

exports.putOne = (id, upd, cb) => {
    db.get().collection('artists').updateOne({
        _id: ObjectId(id)
     }, {$set: {name: upd}}, (err, docs) => {
        cb(err, docs); 
     })
}

exports.postOne = (upd, cb) => {
    db.get().collection('artists').insertOne(upd, (err, docs) =>{
        assert.equal(1, docs.insertedCount);
        cb(err, docs);
    })
}
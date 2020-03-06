'use strict';

const mongoose = require('mongoose');
const Cow = mongoose.model('Cow');

exports.get = async() => {
    const res = await Cow.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Cow
        .findById({
            id
        });

    return res;
}

exports.getByIdFilial = async(idFilial) => {
    const res = await Cow.findOne({ 
        idFilial: idFilial,
    }, '_id nomeCow');
    return res;
}

exports.create = async(body) => {
    var cow = new Cow(body);
    await cow.save();
}

exports.update = async(id, body) => {
    await Cow
    .findByIdAndUpdate(id, {
        $set: {
            nomeCow: body.nomeCow,
        }
    });
}

exports.delete = async(id) => {
    await Cow.findOneAndRemove(id);
}

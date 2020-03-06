'use strict';

const mongoose = require('mongoose');
const Filial = mongoose.model('Filial');

exports.create = async(body) => {
    var filial = new Filial(body);
    await filial.save();
}

exports.get = async() => {
    const res = await Filial.find({});
    return res;
}

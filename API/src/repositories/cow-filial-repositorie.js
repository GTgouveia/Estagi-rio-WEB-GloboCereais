'use strict';

const mongoose = require('mongoose');
const CowFilial = mongoose.model('Cow-Filial');

exports.create = async(body) => {
    var cowFilial = new CowFilial(body);
    await cowFilial.save();
}

exports.get = async() => {
    const res = await CowFilial.find({});
    return res;
}

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    filial:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filial'
    },
    cow:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cow'
    },
});

module.exports = mongoose.model('Cow-Filial', schema);

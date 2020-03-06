'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nomeFazenda: {
        type: String,
        required: true,
    },
    ativo:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Filial', schema);

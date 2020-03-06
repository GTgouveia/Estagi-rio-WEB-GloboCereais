'use strict';

const repositorie = require('../repositories/cow-filial-repositorie');

exports.post = async(req,res,next) => {

    try{
        await repositorie.create({
            filial: req.body.filial,
            cow: req.body.cow
        });
        res.status(201).send({
            message: 'Vaca associado a filial!!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
    }

};

exports.get = async(req,res,next) => {
    try{
        var data = await repositorie.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });
    }
};

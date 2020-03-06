'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repositorie = require('../repositories/filial-repositorie');

exports.post = async(req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nomeFazenda, 3, 'O nome deve conter pelo menos 3 caracteres');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repositorie.create(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!!'
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

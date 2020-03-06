'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repositorie = require('../repositories/cow-repositorie');

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

exports.getByIdFilial = (req,res,next) => {
   try{
        var data = repositorie.getByIdFilial(req.params.idFilial);
        res.status(200).send(data);
   }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
   }
};

exports.getById = (req,res,next) => {
    try{
        var data = repositorie.getById(req.params.id);
        res.status(200).send(data);
   }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
   }
};

exports.post = async(req,res,next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nomeCow, 1, 'O nome da vaca precisa de ter pelo menos 1 caractere!');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repositorie.create(req.body);
        res.status(201).send({
            message: 'Vaca cadastrada com sucesso!!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
    }

};

exports.put = async(req,res,next) => {
    try{
        await repositorie.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Vaca atualizada com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
    }
};

exports.delete = async(req,res,next) => {
    try{
        await repositorie.delete(req.body.id);
        res.status(200).send({
            message: 'Vaca removida com sucesso!!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
        });  
    }
  
};

'use strict'
var Completo = require('../models/completo');
var express = require('express');
var api = express.Router();


//Guardar 
exports.create = (req, res) => {
    //iniciar el objeto
    var informesCompleto = new Completo(req.body);

    //guardar 
    informesCompleto.save().then(data => {
        res.json(data);
        res.status(200).send({ informeCompleto: data });
    }).catch(err => {
        res.status(500).send({ message: 'Error al guardar' });
    });
}
//buscar todos
exports.findAll = (req, res) => {
    Completo.find().then(informes => {
        res.json(informes);
    }).catch(err => {
        res.status(500).send({ message: 'Error al buscar' });
    });
}



//encontrar uno solo
exports.findOne = (req, res) => {
    Completo.findById(req.params.informeId).then(informe => {
        if (!informe) {
            res.status(404).send({ message: 'No se encuentra ese Informe Comercial' });
        }
        res.json(informe);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({ message: 'No se encuentra el Informe Comercial' });
        }
        return res.status(500).send({ message: 'Error de servidor' });
    });
}

//actualizar

exports.update = (req, res) => {
    Completo.findByIdAndUpdate(req.body.id.req.body, { new: true }).then(informe => {
        if (!informe) {
            res.status(404).send({ message: 'Informe Comercial no se encuentra' });
        }
        res.json(informe);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            res.status(404).send({ message: 'Informe Comercial no encontrado' });
        }
        res.status(500).send({ message: 'Error de servidor' });
    });
}

// DELETE a Customer
exports.delete = (req, res) => {
    Completo.findByIdAndRemove(req.params.informesId)
        .then(informe => {
            if (!informe) {
                return res.status(404).json({
                    msg: "Informe Comercial no se ecuentra " + req.params.informesId
                });
            }
            res.json({ msg: "Se borro correctamente" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.nombreComercialCompleto === 'NotFound') {
                return res.status(404).json({
                    msg: "Informe Comercial no se encuentra" + req.params.informesId
                });
            }
            return res.status(500).json({
                msg: "No se puede borrar" + req.params.informesId
            });
        });
};





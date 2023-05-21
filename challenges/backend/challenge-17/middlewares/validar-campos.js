const express = require('express')
const {validationResult} = require('express-validator');

//validar que no se crearan mensajes de error, si hay algun error rompe la linea de errores
const validarCampos =(req, res = express.response, next)=>{
    const errors = validationResult (req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    //si no hay errores ejecuta la funcion de next(ir a la siguiente linea)
    next();
}
module.export ={validarCampos}


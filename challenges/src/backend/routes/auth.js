const express = require('express')
const router =express.Router();
const {check}= require('express-validator');
const {crearUsuario,loginUsuario,revalidarToken}= require('../Controllers/auth')



router.post('/',loginUsuario)
router.post('/new',crearUsuario)
router.get('/renew',revalidarToken)

module.exports= router;

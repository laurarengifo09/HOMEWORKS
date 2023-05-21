const express = require('express')
const router =express.Router();
const {check}= require('express-validator');
const {crearUsuario,loginUsuario,revalidarToken}= require('../Controllers/auth')



router.post('/',loginUsuario)

router.post(
    '/new',
    [
        check('name','el nombre es obligatorio').not().isEmpty(),
        check('email','el email es obligatorio').isEmail(),
        check('password',).isLength({min:6}),

    ],crearUsuario
    
)
router.get('/renew',revalidarToken)
module.exports= router;

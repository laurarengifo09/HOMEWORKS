const express = require ('express');
const router =express.Router();

router.post('/register',(req,res)=>{
    const{name,email,password}=req.body;


    if (!name || !email || !password){
        return res.status(400).json({error:'llenar los campos'});
    }

    res.json({message:'Registro exitoso'});

})
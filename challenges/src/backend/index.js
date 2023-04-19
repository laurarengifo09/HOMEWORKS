const express =require('express')
require('dotenv').config()


const app= express();

app.use(express.static('public'))
app.use(express.json())

//rutas 
app.use('/api/auth', require('./routes/auth'))

//escuchar en puerto
app.listen(process.env.PORT,()=>{
    console.log("servidor corriendo en puerto",process.env.PORT)

})

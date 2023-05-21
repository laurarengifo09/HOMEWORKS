const express =require('express')
const bodyParser =require ('body-parser');
const {register} = require ('./routes/users')
require('dotenv').config()


const app= express();

app.use(express.static('public'))
app.use(express.json())

//rutas 
app.use('/api/auth', require('./routes/auth'))
app.use('/user',register)
app.use('/api/task', require('./routes/task'))
//escuchar en puerto
app.listen(process.env.PORT,()=>{
    console.log("servidor corriendo en puerto",process.env.PORT)

})

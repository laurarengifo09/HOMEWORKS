const listarUsuarios = async (req, res = express.request)=>{
    const usuarios = await Usuario.find().populare('tareas','title');

    try{
        res.status(200).json({
            ok:true,
            usuarios,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'error interno'
        })
    }
}
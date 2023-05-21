const express = require ('express');
const Task = require()

const updateTask= async (req,res = express.request)=>{
    const taskId= req.params.id;
    const {title}= req.body;
    const userId =req.uid;

    try{
        const task= await Task.findById(taskId);

        if(!task){
            return res.status(404).json({error:'la tarea no existe'});
        }
        if (task.user.toString() !==userId){
            return res.status(403).json({error:'no se puede actualizar'});
        }
        task.title =title;

        const updateTask = await task.save();
        res.json({ok:true,task:updatedTask});


    }catch(error){
        console.log(error);
        res.status(500).json({ok:false, task:'error interno'});
    }
}

const deleteTask =async (req,res = express.request)=>{
    const taskId = req.params.id;
    const userId = req.uid;

    try{
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({error:'no existe'});

        }
        if (task.user.toString() !=userId){
            return res.status(403),json({error: 'No se puede eliminar'});
        }

        await task.remove();
        res.json({ok:true, message:'se elimino la tarea'});
    }catch(error){
        console.log(error);
        res.status(500).json({ok:false, task: 'error interno'});
    }
}


const crearTask =async (req,res =express.request)=>{
    const task =new Task (req.body);

    try{
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok:true,
            task:saved
        })
    } catch (error){
        console.log(error);
        res.status(500).json({
            ok:false,
            task:'internal error'
        })
    }
}

const listarTasks =async (req,res = express.request)=>{
    const tasks =await Task.find().populate('user','name');

    try{
        res.status(200).json({
            ok:true,
            tasks,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'error interno'
        })
    }
}
module.exports={
    updateTask,
    deleteTask,
    crearTask
};
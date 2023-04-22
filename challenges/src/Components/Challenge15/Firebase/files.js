import { uploadBytesResumable,ref, listAll, deleteObject  } from "firebase/storage"
import { firebaseStorage } from "./Config"

export const upload = (file) => {
    if(!file){
        alert("Please choose a file first")
    }

    const storageRef = ref(firebaseStorage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask
}

export const getAll = async ()=>{
    const listRef = ref(firebaseStorage, '/files/')
    return listAll(listRef)
}

export const deleteImg = async (file)=>{
    const storageRef = ref(firebaseStorage, file)
    const delObject = deleteObject(storageRef)
    return delObject
}
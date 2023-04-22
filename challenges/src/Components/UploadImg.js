import { useEffect } from "react"
import { useUploadHook} from "./Challenge15/useUploadHook"

export const Upload = () => {
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll, 
        handleDelete 
    } = useUploadHook()

    useEffect(()=>{
        handleGetAll()
    },[])

    return<>
        <div>
            <input type="file" onChange={handleChange} accept=""></input>
            <button onClick={()=>handleUpload()}>Upload to firebase</button>
            <p>{percent} "% done"</p>

            {
                files.map((i, k)=>{
                return <div><img width='100px' src={i} key={k}></img>
                <button onClick={()=>handleDelete(i)}>Delete</button>
                </div>})
            }
        </div>
    </>
}
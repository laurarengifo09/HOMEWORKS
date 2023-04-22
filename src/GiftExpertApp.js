import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"

export const GifExpertApp =()=>{
    const [categories, setcategories] = useState([])

    const onAddCategory =(category)=>{
        setcategories(list=>[...list, category])
    }

    return(
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory}></AddCategory>
            {
                categories.map(
                    (categpry,key)=>{
                        return <GifGrid category={categpry} key={key}></GifGrid>
                    }
                )
            }
        </div>
    )
}
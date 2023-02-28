import React, { useState } from 'react'




 export const Categories = () => {

  const [category, setCategory] = useState("");
  
  const [categories, setCategories] = useState(['first category', 'second category', 'third category']);

  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

  const addCategories = () => {
    setCategories([...categories, category])
    setCategory("")
  }

  return (
    <>
        <h1>Categories</h1>
        <ol>
            {
                categories.map((category, key) => {
                    return <li key={key}> 
                        {category}
                        </li>;
                })
            }
        </ol>
        <input value={category} type="text" placeholder='Escriba algo' onChange={e => handleCategory(e)}></input>
        <button onClick={addCategories}>Agregue</button>
    </>
  )
}

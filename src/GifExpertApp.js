import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => { 

  
  const [categories, setCategories] = useState(['One Punch']);
  
  // const handleAdd = () =>{
  //   setCategories( ['Sakura Card Captors', ...categories]);
  //   setCategories( cats => [...cats, 'Sakura Card Captors']);
  // }
  
  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      

      <ol>
        {
          categories.map(category => (
            <GifGrid 
            key={ category }
            category={ category }/>
          ))
        }
      </ol>
    </>
  )  
}


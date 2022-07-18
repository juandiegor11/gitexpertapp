import {useState,useEffect} from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GitExpertApp = () => { 

    const [categories, setCategories] = useState(["Reus"]);
    
    const addCategory = ( cat ) => {
        if( categories.includes(cat) ) return;
        setCategories([ cat, ...categories ]);
    }

    return (
    <>
        <h1>GitExpertApp</h1>
            <AddCategory onCategories={ (cat) => addCategory(cat) } /> 

        {
            categories.map( category =>(
                <GifGrid category={category} key={category}/>
            ))
        }   
    </>
    )
  
}

export default GitExpertApp;

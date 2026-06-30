import { useState } from "react";
function Components() {

    const [foods, setFoods] = useState(["apple", "banana", "orange"]);

    function handleAddFood (){
        
    }
    function handleRemoveFood (){
        
    }
    return (

        <div>
            <p>Foods</p>
            <ul>{foods}</ul>
            <input type="text" onChange={ handleAddFood}></input>
            <button> add </button>
        </div>
    );
}


export default Components;
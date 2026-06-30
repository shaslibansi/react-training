import { useState } from "react";
function Components() {

    const [foods, setFoods] = useState(["apple", "banana", "orange"]);

    function handleAddFood (){}
    return (

        <div>
            <p>Foods</p>
            <input type="text" onChange={ handleAddFood}></input>
        </div>
    );
}


export default Components;
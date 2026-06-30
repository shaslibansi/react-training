import { useState } from 'react';

function Components() {
  const [foods, setFoods] = useState(['apple', 'banana', 'orange']);

  function handleAddFoods() {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';
    useState((f) => [...f, newFood]);
  }
  function handleRemovedFoods() {}
  return (
    <div>
      <p>list of foods</p>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="enter foods"></input>
      <button onClick={handleAddFoods}>Add</button>
    </div>
  );
}

export default Components;

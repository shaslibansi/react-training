import { useState } from 'react';

function Components() {
  const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

  function handleAddFoods() {
    const newFoods = document.getElementById('foodinput').value;
    setFoods((f) => [...f, newFoods]);
    document.getElementById('foodinput').value = '';
  }

  function handleRemoveFoods(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <p>foods</p>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFoods(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodinput" placeholder="input foods"></input>
      <button onClick={handleAddFoods}>add foods</button>
    </div>
  );
}

export default Components;

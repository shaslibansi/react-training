import { useState } from 'react';

function Components() {
  const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

  function handleAddFoods() {
    const newFoods = document.getElementById('addfood').value;
    document.getElementById('addfood').value = '';
    setFoods((f) => [...f, newFoods]);
  }

  function handleRemovedFoods(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <p>add foods</p>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemovedFoods(index)}>
            {' '}
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="addfood" placeholder="addfoods"></input>
      <button onClick={handleAddFoods}>add foods</button>
    </div>
  );
}

export default Components;

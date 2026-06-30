import { useState } from 'react';

function Components() {
  const [car, setCar] = useState({
    name: 'ford',
    model: 'mustang',
    year: 2024,
  });

  function handleAddCar() {}
  function handleRemoveCar() {}
  function handleNameChange() {}
  function handleModelChange() {}
  function handleYearChange() {}
  return (
    <div>
      <p>Car</p>
      <p>
        {car.name}
        {car.model}
        {car.year}
      </p>
      <input type="text" value={car.name}></input>
      <br />
      <br />
      <input type="text" value={car.model}></input>
      <br />
      <br />
      <input type="number" value={car.year}></input>
      <br />
      <br />
      <button>add car</button>
    </div>
  );
}

export default Components;

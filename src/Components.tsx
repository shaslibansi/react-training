import { useState } from 'react';

function Components() {
  const [car, setCar] = useState({
    name: 'ford',
    model: 'mustang',
    year: 2024,
  });
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
      <input type="number"></input>
      <br />
    </div>
  );
}

export default Components;

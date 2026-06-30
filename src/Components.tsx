import { useState } from 'react';

function Components() {
  const [cars, setCars] = useState([]);
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState(new Date().getFullYear());

  function handleAddCar() {
    const newCar = { name: carName, model: carModel, year: carYear };
    setCars((cars) => [...cars, newCar]);
    setCarName('');
    setCarModel('');
    setCarYear(new Date().getFullYear());
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((car, i) => i !== index));
  }
  function handleCarNameChange(event) {
    setCarName(event.target.value);
  }
  function handlecarModelChange(event) {
    setCarModel(event.target.value);
  }
  function handlecarYearChange(event) {
    setCarYear(event.target.value);
  }

  return (
    <div>
      <p>car model</p>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.name}
            {car.model}
            {car.year}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={handleCarNameChange}
        value={carName}
        placeholder="enter car name"
      ></input>
      <br />
      <input
        type="text"
        onChange={handlecarModelChange}
        value={carModel}
        placeholder="enter car model"
      ></input>
      <br />
      <input
        type="number"
        onChange={handlecarYearChange}
        value={carYear}
      ></input>
      <br />
      <br />
      <button onClick={handleAddCar}>add car</button>
    </div>
  );
}

export default Components;

import { useState } from 'react';

function Components() {
  const [cars, setCar] = useState([]);
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState(new Date().getFullYear());

  function handleAddCar() {
    const newCar = {
      name: carName,
      model: carModel,
      year: carYear,
    };
    setCar((c) => [...c, newCar]);

    setCarName('');
    setCarModel('');
    setCarYear(new Date().getFullYear());
  }
  function handleRemoveCar() {}
  function handleCarNameChange(event) {
    setCarName(event.target.value);
  }
  function handleCarMakeChange(event) {
    setCarModel(event.target.value);
  }
  function handleCarYearChange(event) {
    setCarYear(event.target.value);
  }

  return (
    <div>
      <p>car model</p>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.name}
            {car.model}
            {car.year}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={carName}
        placeholder="input car name"
        onChange={handleCarNameChange}
      ></input>
      <br />
      <input
        type="text"
        value={carModel}
        placeholder="input car model"
        onChange={handleCarMakeChange}
      ></input>
      <br />
      <input
        type="number"
        value={carYear}
        placeholder="input car year"
        onChange={handleCarYearChange}
      ></input>
      <br />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default Components;

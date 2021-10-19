import { FC, useCallback, useState } from "react";
import Car, { CarProps } from "./car";

import "./dashboard.css";
import Driver, { DriverProps } from "./driver";

const Dashboard: FC = ({ children }) => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [drivers, setDrivers] = useState<DriverProps[]>([]);

  const addCar = useCallback(() => {
    setCars([
      ...cars,
      { brand: "hyndai", doors: 2, id: Math.floor(Math.random() * (100 + 1)) },
    ]);
  }, [cars]);

  const addDriver = useCallback(() => {
    setDrivers([
      ...drivers,
      {
        name: "Paco",
        surname: "Piernas",
        id: Math.floor(Math.random() * (100 + 1)),
      },
    ]);
  }, [drivers]);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <button onClick={addCar}>Add car</button>
        <button onClick={addDriver}>Add driver</button>
      </div>
      <div className="dashboard__content">
        {cars.map((car) => (
          <Car key={car.id} {...car} />
        ))}
      </div>
      <div className="dashboard__content">
        {drivers.map((car) => (
          <Driver key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

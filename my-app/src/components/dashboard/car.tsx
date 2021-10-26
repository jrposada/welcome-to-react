import { FC, useCallback, useMemo, useState } from "react";
import Door from "./door";

interface CarProps {
  id: number;
  doors: number;
  brand: string;
}

const Car: FC<CarProps> = ({ brand, doors }) => {
  const [currentDoors, setCurrentDoors] = useState(Array(doors).fill(1));

  const title = useMemo(() => `${brand} (${doors})`, [brand, doors]);

  const addDoor = useCallback(() => {
    setCurrentDoors([...currentDoors, 1]);
  }, [currentDoors]);

  return (
    <div className="car">
      <div>{title}</div>
      <button onClick={addDoor}>Add door</button>
      {currentDoors.map((d, index) => (
        <Door key={index} reactKey={index} />
      ))}
    </div>
  );
};

export default Car;
export type { CarProps };

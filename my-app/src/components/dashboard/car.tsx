import { FC } from "react";

interface CarProps {
  id: number;
  doors: number;
  brand: string;
}

const Car: FC<CarProps> = ({ brand, doors }) => {
  const title = `${brand} (${doors})`;
  return (
    <div className="car">
      <div>{title}</div>
    </div>
  );
};

export default Car;
export type { CarProps };

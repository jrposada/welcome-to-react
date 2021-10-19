import { FC, useMemo } from "react";

interface CarProps {
  id: number;
  doors: number;
  brand: string;
}

const Car: FC<CarProps> = ({ brand, doors }) => {
  const title = useMemo(() => `${brand} (${doors})`, [brand, doors]);
  return (
    <div className="car">
      <div>{title}</div>
    </div>
  );
};

export default Car;
export type { CarProps };

import { FC } from "react";

interface DriverProps {
  id: number;
  name: string;
  surname: string;
}

const Driver: FC<DriverProps> = ({ name, surname }) => {
  return (
    <div className="driver">
      <div>
        I'm {name} {surname}
      </div>
    </div>
  );
};

export default Driver;
export type { DriverProps };

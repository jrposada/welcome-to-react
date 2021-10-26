import { ChangeEventHandler, FC, useCallback, useState } from "react";

interface DoorProps {
  reactKey: React.Key;
}
const Door: FC<DoorProps> = ({ reactKey }) => {
  const [size, setSize] = useState("normal");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => setSize(event.target.value),
    []
  );

  return (
    <div>
      <div>
        Door {size} ({reactKey})
      </div>
      <input onChange={handleInputChange} />
    </div>
  );
};

export default Door;

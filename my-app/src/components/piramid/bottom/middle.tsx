import { ChangeEventHandler, useEffect, useState } from "react";

interface MiddleBottomProps {
  onNameChange: (name: string) => void;
}
function MiddleBottom({ onNameChange }: MiddleBottomProps) {
  const [name, setName] = useState("middle");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("MiddleBottom render");

  useEffect(() => {
    onNameChange(name);
  }, [onNameChange, name]);

  return (
    <div style={{ backgroundColor: "cyan", padding: "20px" }}>
      Middle ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default MiddleBottom;

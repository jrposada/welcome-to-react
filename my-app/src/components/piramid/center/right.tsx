import { ChangeEventHandler, useState } from "react";

function RightCenter() {
  const [name, setName] = useState("right");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("RightCenter render");

  return (
    <div style={{ backgroundColor: "silver", padding: "20px" }}>
      Right ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default RightCenter;

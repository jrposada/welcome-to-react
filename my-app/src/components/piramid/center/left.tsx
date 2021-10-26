import { ChangeEventHandler, useState } from "react";

function LeftCenter() {
  const [name, setName] = useState("left");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("LeftCenter render");

  return (
    <div style={{ backgroundColor: "grey", padding: "20px" }}>
      Left ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default LeftCenter;

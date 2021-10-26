import { ChangeEventHandler, useState } from "react";

function LeftBottom() {
  const [name, setName] = useState("left");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("LeftBottom render");

  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      Left ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default LeftBottom;

import { ChangeEventHandler, useState } from "react";

function RightBottom() {
  const [name, setName] = useState("right");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("RightBottom render");

  return (
    <div style={{ backgroundColor: "teal", padding: "20px" }}>
      Right ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default RightBottom;

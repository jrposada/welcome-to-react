import { ChangeEventHandler, useState } from "react";

function Top() {
  const [name, setName] = useState("top");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("Top render");

  return (
    <div style={{ backgroundColor: "green", padding: "20px" }}>
      Top ({name})
      <input onChange={handleInputChange} />
    </div>
  );
}

export default Top;

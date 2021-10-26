import { ChangeEventHandler, useState } from "react";
import Left from "./left";
import Right from "./right";

function Center() {
  const [name, setName] = useState("center");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("Center render");

  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      Center ({name})
      <input onChange={handleInputChange} />
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Center;

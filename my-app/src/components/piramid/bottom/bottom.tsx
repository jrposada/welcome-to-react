import { ChangeEventHandler, useState } from "react";
import Left from "./left";
import Middle from "./middle";
import Right from "./right";

interface BottomProps {
  onNameChange: (name: string) => void;
}
function Bottom({ onNameChange }: BottomProps) {
  const [name, setName] = useState("bottom");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  console.log("Bottom render");

  return (
    <div
      style={{
        backgroundColor: "purple",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      Bottom ({name})
      <input onChange={handleInputChange} />
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Left />
        <Middle onNameChange={onNameChange} />
        <Right />
      </div>
    </div>
  );
}

export default Bottom;

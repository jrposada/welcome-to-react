import { ChangeEventHandler, useState } from "react";
import Bottom from "./bottom/bottom";
import Center from "./center/center";
import Top from "./top/top";

function Piramid() {
  const [name, setName] = useState("piramid");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value);

  const handleNameChange = (childName: string) => {
    setName(childName);
  };

  console.log("Piramid render");

  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Piramid ({name})
      <input onChange={handleInputChange} />
      <Top />
      <Center />
      <Bottom onNameChange={handleNameChange} />
    </div>
  );
}

export default Piramid;

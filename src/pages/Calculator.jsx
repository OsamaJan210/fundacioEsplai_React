import React, { useState } from "react";
import Display from "../components/Display";
import Key from "../components/Key";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (label) => {
    if (label === "C") {
      setValue("");
    } else if (label === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else {
      setValue((prev) => prev + label);
    }
  };

  const keys = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="w-fit mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
      <Display value={value} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {keys.map((key) => (
          <Key key={key} label={key} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;

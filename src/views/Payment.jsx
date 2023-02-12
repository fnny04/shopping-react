import React from "react";
import { useState } from "react";

export default function Payment() {
  const [value, setValue] = useState(0);

  const onChange = () => {
    console.log("Ini ke Click");
    setValue(value + 1);
  };

  return (
    <>
      <button onClick={onChange}>{value}</button>
    </>
  );
}

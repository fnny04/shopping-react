import { useState, useEffect } from "react";

export default function Counter({ defaultValue, onRemoveItem, onValueChange }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onMinItem = () => {
    if (value > 0) {
      if (value === 1) {
        onRemoveItem();
      }
      setValue(value - 1);
      onValueChange(value - 1);
    } else {
      setValue(value);
      onValueChange(value);
    }
  };

  const onMaxItem = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  return (
    <div className="flex flex-cols gap-2">
      <button onClick={onMinItem} className="p-1 rounded-full border">
        -
      </button>

      <input
        className="flex justify-center items-center border w-9 rounded-md"
        type="number"
        value={value}
      />
      <button onClick={onMaxItem} className="p-2 rounded-full border">
        +
      </button>
    </div>
  );
}

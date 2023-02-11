import { useState, useEffect } from "react";
import Counter from "../components/Counter";

const Card = (props) => {
  const { item, onItemChange } = props;
  const { name, img, price, value } = item;
  const [itemValue, setItemvalue] = useState(0);

  const onAddItems = () => {
    setItemvalue(itemValue + 1);
    onValueChange(itemValue + 1);
  };

  const onRemoveItem = () => {
    setItemvalue(0);
  };

  const onValueChange = (valueChange) => {
    const newItem = { ...item };
    newItem.value = valueChange;
    onItemChange(newItem);
  };

  useEffect(() => {
    setItemvalue(value);
  }, [value]);

  return (
    <div className="h-60 w-60 bg-gray-100 border border-black rounded-md flex items-center flex-col justify-center">
      <img width={200} src={img} alt="" />
      <h1 className="font-bold">{name}</h1>
      <p>Rp.{price}</p>

      {itemValue > 0 ? (
        <Counter
          defaultValue={itemValue}
          onRemoveItem={onRemoveItem}
          onValueChange={onValueChange}
        />
      ) : (
        <button
          onClick={onAddItems}
          className="px-14 border text-blue-400 bg-white rounded-md"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Card;

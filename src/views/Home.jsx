import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import items from "../dummy/items.json";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ListItems from "../Layout/ListItems";

const listItemsState = atom({
  key: "listItemsState",
  default: [],
});

const Home = () => {
  const [listItems, setListItems] = useRecoilState(listItemsState);

  const [totalItem, setTotalItem] = useState(0);
  const sumItem = (itemsArray) => {
    const total = itemsArray.reduce((before, after) => before + after.value, 0);
    setTotalItem(total);
  };

  const onItemChange = (itemChange) => {
    const newArray = listItems.map((item) => {
      if (item.id === itemChange.id) {
        return itemChange;
      } else {
        return item;
      }
    });
    setListItems(newArray);
    sumItem(newArray);
  };

  useEffect(() => {
    setListItems(items);
    sumItem(items);
  }, []);

  return (
    <>
      <Navbar totalItem={totalItem} />
      <Search />
      <ListItems items={listItems} onItemChange={onItemChange} />
    </>
  );
};

export default Home;

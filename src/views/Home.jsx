import { useState, useEffect } from "react";
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
  useEffect(() => {
    setListItems(items);
  }, [setListItems]);

  return (
    <>
      <Navbar />
      <Search />
      <ListItems items={listItems} />
    </>
  );
};

export default Home;

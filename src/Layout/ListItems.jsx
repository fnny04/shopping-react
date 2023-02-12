import Item from "../components/Item";

function ListItem({ items, onItemChange }) {
  return (
    <div className="p-2 gap-y-8 grid grid-cols-2 gap-x-8 justify-center items-center md:grid-cols-4">
      {items.map((item) => (
        <Item item={item} onItemChange={onItemChange} />
      ))}
    </div>
  );
}

export default ListItem;

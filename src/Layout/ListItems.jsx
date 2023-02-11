import Item from "../components/Item";

function ListItem({ items, onItemChange }) {
  return (
    <div className="p-4 gap-y-8 grid grid-cols-4">
      {items.map((item) => (
        <Item item={item} onItemChange={onItemChange} />
      ))}
    </div>
  );
}

export default ListItem;

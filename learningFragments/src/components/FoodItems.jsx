import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          foodItems={items}
          handleByBtn={() => {
            console.log(`${items} bought`);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

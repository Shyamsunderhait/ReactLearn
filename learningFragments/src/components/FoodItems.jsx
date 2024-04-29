import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (items, event) => {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          foodItems={items}
          bought={activeItems.includes(items)}
          handleByBtn={(event) => {
            onBuyButton(items, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

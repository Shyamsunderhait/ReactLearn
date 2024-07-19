import { useReducer, useState, createContext } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const reduceTodoItems = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEMS") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DEL_ITEM") {
    newTodoItems = currTodoItems.filter(
      (items) => items.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const initialTodoItems = [];

  //const [todoItems, setTodoItems] = useState(initialTodoItems);

  const [todoItems, dispatchTodoItems] = useReducer(
    reduceTodoItems,
    initialTodoItems
  );

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = {
      type: "NEW_ITEMS",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const delTodoItem = {
      type: "DEL_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(delTodoItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

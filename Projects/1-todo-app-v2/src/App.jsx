import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomMessage from "./components/WelcomMessage";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new Item added ${itemName} ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteClick = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (items) => items.name !== todoItemName
    );
    setTodoItems(newTodoItems);

    console.log(`Item deleted: ${todoItemName}`);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />

        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomMessage></WelcomMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteClick}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;

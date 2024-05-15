import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/12/2334",
    },
    {
      name: "Indie",
      dueDate: "4/12/7774",
    },
    {
      name: "Indie",
      dueDate: "4/12/7774",
    },
    {
      name: "Buy Milk",
      dueDate: "4/12/2334",
    },
    {
      name: "Indie",
      dueDate: "4/12/7774",
    },
    {
      name: "Indie",
      dueDate: "4/12/7774",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new Item added ${itemName} ${itemDueDate}`);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />

        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;

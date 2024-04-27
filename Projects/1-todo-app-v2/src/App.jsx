import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
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
  return (
    <>
      <center className="todo-container">
        <AppName />

        <AddTodo />
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;

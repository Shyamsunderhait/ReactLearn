import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

import WelcomMessage from "./components/WelcomMessage";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./store/Todo-items-store";
import { MdDisplaySettings } from "react-icons/md";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />

        <AddTodo />
        <WelcomMessage></WelcomMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

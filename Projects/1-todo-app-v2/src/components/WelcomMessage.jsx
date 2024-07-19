import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
  );
};

export default WelcomMessage;

import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddBtn = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row sh-row" onSubmit={handleAddBtn}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="Enter task" />
        </div>

        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button onSubmit={handleAddBtn} className="btn btn-success sh-button">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

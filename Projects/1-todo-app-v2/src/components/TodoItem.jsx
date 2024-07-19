import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row sh-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sh-button"
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

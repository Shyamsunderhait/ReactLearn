import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = () => {
    setTodoName(event.target.value);
  };
  const handleDateChange = () => {
    setDueDate(event.target.value);
  };

  const handleAddBtn = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row sh-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter task"
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success sh-button"
            onClick={handleAddBtn}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

function TodoItem1() {
  let todoName = "BuyMilk";
  let todoDate = "24/04/2024";

  return (
    <div class="container">
      <div class="row sh-row">
        <div class="col-6">{todoName}</div>

        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sh-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;

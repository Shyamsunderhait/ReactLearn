import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let textStateArr = useState("Food item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textToShow, setTextState] = useState("Food item entered by user");
  let [foodItems, setFoodItems] = useState([]);
  // console.log(`Current Value of textState: ${textToShow}`);
  const onkeyDown = (event) => {
    // setTextState(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`Food value entered is ${newFoodItem}`);
    }
  };
  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>

        <FoodInput handleKeyDown={onkeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}

        <FoodItems items={foodItems}></FoodItems>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </Container>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [
    "IndieMint",
    "Green Vegetable",
    "Milk",
    "MyProtien",
    "Salad",
  ];
  let textStateArr = useState("Food item entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  console.log(`Current Value of textState: ${textToShow}`);
  const handleOnChnage = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>

        <ErrorMsg items={foodItems}></ErrorMsg>

        <FoodInput handleOnChnage={handleOnChnage}></FoodInput>
        <p>{textToShow}</p>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;

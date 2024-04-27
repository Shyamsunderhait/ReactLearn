import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChnage }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onChange={handleOnChnage}
    />
  );
};

export default FoodInput;

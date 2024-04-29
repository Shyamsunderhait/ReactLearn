import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleByBtn }) => {
  return (
    <li
      className={`${styles["sh-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={`${styles["sh-span"]}`}>{foodItems}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleByBtn}>
        Buy
      </button>
    </li>
  );
};

export default Item;
// "list-group-item sh-item"

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { manageItem, removeItem } from "store/cart/reducer";
import styles from "./cartListItem.module.scss";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

export default function CartListItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = useCallback((e) => {
    const newQuantity = Math.min(Math.max(e.target.valueAsNumber, 1), 20); 
    setQuantity(newQuantity);
    dispatch(manageItem({ ...item, quantity: newQuantity }));
  }, [dispatch, item]);

  const removeItemFromCart = useCallback(() => {
    toast.error(`${item.name} removed from cart`);
    dispatch(removeItem({ item }));
  }, [dispatch, item]);

  return (
    <li className={styles.listItem}>
      <img
        src={item.img}
        alt={item.name}
        className={styles.img}
        width="337"
        height="280"
      />
      <button
        className={styles.button}
        onClick={removeItemFromCart}
      >
        <FaTrash className={styles.icon} />
      </button>
      <div className={styles.infoWrapper}>
        <div className={styles.descWrapper}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>
            Price: {(item.price * quantity).toFixed(2)} &#8372;
          </p>
        </div>
        <input
          className={styles.input}
          type="number"
          name="quantity"
          min="1"
          max="25"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </li>
  );
}
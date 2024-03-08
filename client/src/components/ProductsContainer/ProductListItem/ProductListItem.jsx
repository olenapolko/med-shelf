import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageItem } from "store/cart/reducer";
import { toast } from "react-toastify";
import { addFavorite, removeFavorite } from "store/favorites/reducer";
import selectFavorites from "store/favorites/selectors";
import { FaHeart } from "react-icons/fa";

import styles from "./productListItem.module.scss";

export default function ProductListItem({ product }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectFavorites);
  const isFavorite = favorites.includes(product.id);
  const [quantity, setQuantity] = useState(1);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product.id));
    }
  };

  const handleQuantityChange = useCallback((e) => {
    const newQuantity = Math.min(Math.max(Number(e.target.value), 1), 20);
    setQuantity(newQuantity);
  }, []);

  const handleAddToCart = useCallback(() => {
    dispatch(manageItem({ ...product, quantity }));
    toast.info(`${quantity} ${product.name} added to cart`);
  }, [dispatch, product, quantity]);

  return (
    <li className={styles.wrapper}>
      <button
        onClick={toggleFavorite}
        className={styles.favoriteButton}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <FaHeart
          style={{
            color: isFavorite ? "#00673a" : "#8b8b8b",
            opacity: isFavorite ? 1 : 0.5,
          }}
          size="24px"
        />
      </button>
      <img
        className={styles.img}
        src={product.img}
        alt={`${product.name}`}
        width="281"
        height="192"
      />
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{product.price} &#8372;</p>
        <div className={styles.descWrapper}>
          <input
            type="number"
            name="quantity"
            min="1"
            max="25"
            step="1"
            value={quantity}
            className={styles.input}
            onChange={handleQuantityChange}
          />
          <button
            className={styles.button}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

import { useDispatch, useSelector } from "react-redux";
import selectShops from "store/shops/selectors";
import selectCart from "store/cart/selectors";
import { setShop } from "store/shops/reducer";
import styles from "./shopsContainer.module.scss";
import { toast } from "react-toastify";

export default function ShopsContainer() {
  const { data, currentShop } = useSelector(selectShops);
  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map((shop) => (
          <li
            key={shop._id}
            className={
              currentShop._id === shop._id
                ? `${styles.listItem} activeShop`
                : styles.listItem
            }
            onClick={() => {
              !items.length
                ? dispatch(setShop(shop))
                : toast.warn(
                    "Please choose products from one store only"
                  );
            }}
          >
            <img className={styles.img} src={shop.thumbImg} alt="Shop logo" />
            <span className={styles.storeName}>{shop.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

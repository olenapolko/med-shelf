import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrderHistory } from "store/order/reducer";
import HistoryList from "components/HistoryList";

import styles from "./historyWrapper.module.scss";

export default function HistoryWrapper() {
  const { orders, isLoading, error } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(clearOrderHistory()), [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p className={styles.error}>
        Ooops...Something went wrong. Please, try again.
      </p>
    );

  return (
    <ul className={styles.historyList}>
      {orders.map((order) => (
        <li className={styles.historyListItem} key={order._id}>
          <div className={styles.orderInfo}>
            <p className={styles.orderId}>Order ID: {order._id}</p>
            <p className={styles.orderDate}>
              Date: {new Date(order.date).toLocaleDateString()}
            </p>
            <p className={styles.orderPrice}>
              Total Price: {Number(order.totalPrice).toFixed(2)}&#8372;
            </p>
          </div>
          <HistoryList items={order.items} />
        </li>
      ))}
    </ul>
  );
}

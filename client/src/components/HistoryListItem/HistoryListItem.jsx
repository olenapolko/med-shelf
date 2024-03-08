import styles from "./historyListItem.module.scss";

export default function HistoryListItem({ item }) {
  return (
    <li className={styles.listItem}>
      <img
        src={item.img}
        alt={item.name}
        style={{ width: "100px", height: "100px" }}
      />
      <div className={styles.listText}>
        <h4>{item.name}</h4>
        <p>Price: {item.price}&#8372;</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </li>
  );
}

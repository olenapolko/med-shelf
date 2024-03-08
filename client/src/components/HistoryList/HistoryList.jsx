import HistoryListItem from "components/HistoryListItem/HistoryListItem";
import styles from "./historyList.module.scss";

export default function HistoryList({ items }) {
    return items.length > 0 ? (
      <ul className={styles.historyList}>
        {items.map((item) => (
          <HistoryListItem key={item.id} item={item} />
        ))}
      </ul>
    ) : (
      <p>No items found in this order.</p>
    );
  }
  
import HistoryList from "components/HistoryWrapper";
import HistorySearchForm from "components/HistorySearchForm";
import styles from "./historyPage.module.scss"

function HistoryPage() {
  return (
    <div className={styles.historyPageWrapper}>
      <HistorySearchForm />
      <HistoryList />
    </div>
  );
}

export default HistoryPage;

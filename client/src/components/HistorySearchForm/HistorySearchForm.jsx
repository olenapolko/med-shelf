import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOrdersHistory } from "store/order/operations";

import styles from "./historySearchForm.module.scss";

export default function HistorySearchForm() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchOrdersHistory(email));
  };

  return (
    <div className={styles.formWrapper}>
      <p className={styles.formText}>Search orders by email</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

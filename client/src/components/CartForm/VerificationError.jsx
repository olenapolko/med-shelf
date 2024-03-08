import styles from "./cartForm.module.scss";

export default function VerificationError({ children }) {
  return <p className={styles.error}>{children}</p>;
}

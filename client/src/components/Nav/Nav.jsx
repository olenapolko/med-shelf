import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "img/logoMed.png";

export default function Nav() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.company}>
    <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Shops
        </NavLink>
        <NavLink to="/cart" className={styles.navLink}>
          Shopping Cart
        </NavLink>
        <NavLink to="/order" className={styles.navLink}>
          History
        </NavLink>
      </nav>
    </header>
  );
}

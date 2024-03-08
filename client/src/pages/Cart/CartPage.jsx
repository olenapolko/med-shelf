import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import selectCart from "store/cart/selectors";
import CartForm from "components/CartForm";
import CartList from "components/CartList";
import styles from "./cartPage.module.scss";
import emptyCartIcon from "img/emptyCart.svg";

export default function CartPage() {
  const { items } = useSelector(selectCart);
  const navigate = useNavigate();

  return items.length ? (
    <div className={styles.cartPageWrapper}>
      <CartList />
      <CartForm />
    </div>
  ) : (
    <div className={styles.emptyCartPageWrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={emptyCartIcon} alt="Empty cart" />
      </div>
      <p className={styles.text}>
        Your cart is empty. Please add some items to the cart.
      </p>
      <button className={styles.button} onClick={() => navigate("/")}>
        Return to stores
      </button>
    </div>
  );
}

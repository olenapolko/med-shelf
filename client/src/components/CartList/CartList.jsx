import React from 'react';
import CartListItem from 'components/CartListItem';
import selectCart from "store/cart/selectors";
import { useSelector } from "react-redux";

import styles from './cartList.module.scss'

export default function CartList() {
const { items } = useSelector(selectCart);

  return (
    <div className={styles.cartListWrapper}>
        <ul className={styles.cartList}>
          {items.map((item) => (
            <CartListItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
  )
}

import { useState, useEffect, useMemo } from "react";
import ProductListItem from "./ProductListItem";
import styles from "./productsContainer.module.scss";
import { useSelector } from "react-redux";
import selectFavorites from "store/favorites/selectors";
import sortProducts from "utils/sortProducts";

export default function ProductContainer({ shop }) {
  const [sortOrder, setSortOrder] = useState("price_asc");
  const { favorites } = useSelector(selectFavorites);

  const sortOptions = [
    { value: "price_asc", label: "Price (Low to High)" },
    { value: "price_desc", label: "Price (High to Low)" },
    { value: "date_added_new", label: "Date Added (Newest First)" },
    { value: "date_added_old", label: "Date Added (Oldest First)" },
  ];

  const sortedProducts = useMemo(() => {
    if (shop?.products && favorites) {
      return sortProducts(shop.products, sortOrder, favorites);
    }
    return [];
  }, [shop, sortOrder, favorites]); 

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sortingWrapper}>
        <label className={styles.label}>Sort by: </label>
        <select
          className={styles.select}
          value={sortOrder}
          onChange={handleSortChange}
        >
          {sortOptions.map(({ value, label }) => (
            <option className={styles.option} value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.list}>
        {sortedProducts.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

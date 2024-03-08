import ProductContainer from "components/ProductsContainer";
import ShopsContainer from "components/ShopsContainer";
import styles from "./shopsPage.module.scss";
import { ThreeDots } from "react-loader-spinner";

import selectShops from "store/shops/selectors";

import { useSelector } from "react-redux";

export default function ShopsPage() {
  const { currentShop, isLoading } = useSelector(selectShops);

  return isLoading && !currentShop ? (
    <div className="loader">
      <ThreeDots
            visible={true}
            height="120"
            width="120"
            color="#00673a"
            ariaLabel="loading-indicator"
      />
    </div>
  ) : (
    <div className={styles.shopPageWrapper}>
      <ShopsContainer />
      <ProductContainer shop={currentShop} />
    </div>
  );
}

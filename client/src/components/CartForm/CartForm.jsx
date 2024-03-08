import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "store/user/reducer";
import { ThreeDots } from "react-loader-spinner";
import { cartFormValidationSchema } from "validations/cartFormValidationSchema";

import { placeOrder } from "store/order/operations";
import selectCart from "store/cart/selectors";
import selectOrderStatus from "store/order/selectors";
import selectShops from "store/shops/selectors";

import VerificationError from "./VerificationError";

import styles from "./cartForm.module.scss";
import MapWrapper from "components/GoogleMap/MapWrapper";
import selectDirections from "store/map/selectors";

export default function CartForm() {
  const dispatch = useDispatch();

  const { directions } = useSelector(selectDirections);
  const { isLoading } = useSelector(selectOrderStatus);
  const { items, totalPrice } = useSelector(selectCart);
  const { currentShop } = useSelector(selectShops);

  useEffect(() => {
    if (!directions) return;
    const addressInput = document.querySelector("#address");
    addressInput.value = directions;
  }, [directions]);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
        }}
        onSubmit={(values) => {
          dispatch(
            placeOrder({
              shop: currentShop._id,
              user: values,
              items,
              totalPrice,
            })
          );
          dispatch(
            addUserData({
              data: values,
            })
          );
        }}
        validationSchema={cartFormValidationSchema}
      >
        {({ setFieldValue }) => (
          <Form
            className={styles.form}
            onClick={() => {
              if (directions) setFieldValue("address", directions);
            }}
          >
            <MapWrapper />
            <div className={styles.inputWrapper}>
              <label className={styles.label}>
                Address
                <Field
                  autoComplete="on"
                  type="string"
                  name="address"
                  placeholder="Zelena str. 145, Lviv, Ukraine"
                  id="address"
                  className={`${styles.input}`}
                />
                <ErrorMessage name="address" component={VerificationError} />
              </label>
              <label className={styles.label}>
                Name
                <Field
                  autoComplete="on"
                  name="name"
                  placeholder="John Green"
                  className={styles.input}
                />
                <ErrorMessage
                  name="name"
                  component={VerificationError}
                  className={styles.error}
                />
              </label>
              <label className={styles.label}>
                Email
                <Field
                  autoComplete="on"
                  type="email"
                  name="email"
                  placeholder="johngreen@gmail.com"
                  id="email"
                  className={styles.input}
                />
                <ErrorMessage name="email" component={VerificationError} />
              </label>
              <label className={styles.label}>
                Phone
                <Field
                  autoComplete="on"
                  type="phone"
                  name="phone"
                  placeholder="063 000 00 00"
                  className={styles.input}
                />
                <ErrorMessage name="phone" component={VerificationError} />
              </label>
            </div>

            <div className={styles.checkOutWrapper}>
              <p className={styles.totalPrice}>
                Total price {Number(totalPrice).toFixed(2) || "0.00"} &#8372;
              </p>

              <button className={styles.orderButton} type="submit">
                {isLoading ? (
                  <ThreeDots
                    visible={true}
                    height="120"
                    width="120"
                    color="#00673a"
                    ariaLabel="loading-indicator"
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
  
}

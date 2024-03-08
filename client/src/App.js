import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchShops } from "./store/shops/operations";

import ShopsPage from "./pages/Shops/ShopsPage";
import Nav from "./components/Nav";
import CartPage from "./pages/Cart/CartPage";
import HistoryPage from "pages/History/HistoryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<ShopsPage />} />
            <Route
              path="/Cart" element={<CartPage />}
            />
            <Route path="/order" element={<HistoryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

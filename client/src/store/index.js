import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { shopsReducer } from "./shops/reducer";
import { cartReducer } from "./cart/reducer";
import { favoritesReducer } from "./favorites/reducer";
import { mapReducer } from "./map/reducer";
import { orderReducer } from "./order/reducer";
import { userReducer } from "./user/reducer";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const shopsPersistConfig = {
  key: "shops",
  storage,
  whitelist: ["currentShop"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    shops: persistReducer(shopsPersistConfig, shopsReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    user: userReducer,
    map: mapReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

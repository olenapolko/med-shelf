import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {favorites: []},
    reducers: {
      addFavorite: (state, action) => {
        const productId = action.payload;
        if (!state.favorites.includes(productId)) {
          state.favorites.push(productId);
        }
      },
      removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(productId => productId !== action.payload);
      },
    },
  });
  

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
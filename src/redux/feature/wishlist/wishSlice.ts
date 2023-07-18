import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  pub_date: number;
  quantity: number;
}

interface WishlistState {
  books: Book[];
  total: number;
}

const initialState: WishlistState = {
  books: [],
  total: 0,
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action: PayloadAction<Book>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action: PayloadAction<Book>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }
    },
    removeFromWish: (state, action: PayloadAction<Book>) => {
      const bookToRemove = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (bookToRemove) {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToWish, removeOne, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;

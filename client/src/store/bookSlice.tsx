import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Define a type for the slice state
export interface Book {
  id: number;
  title: string;
  description: string;
  price: number;
  author?: string;
}

// Define the initial state using that type
export interface BooksState {
  books: Array<Book>;
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState = {
  books: [] as Array<Book>,
  loading: false,
  error: "",
};

// fetch books from api and return data
// or error if any error occurred while fetching data from api server

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get("http://localhost:3005/books");
      const books = await response.data;
      return books;
    } catch (error) {
      return rejectWithValue("Error while fetching books");
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (data: Book, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    try {
      data.author = (getState() as any).auth.name;
      console.log(data);
      await axios.post("http://localhost:3005/books", data);
      return data;
    } catch (error) {
      return rejectWithValue("Error while inserting book");
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (data: Book, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await axios.delete("http://localhost:3005/books/" + data.id);
      return data;
    } catch (error) {
      return rejectWithValue("Error while inserting book");
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // get books from api
    builder.addCase(getBooks.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;

      state.error = action.payload as string;
    });

    // insert book into api
    builder.addCase(insertBook.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(insertBook.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      state.books.push(action.payload);
    });
    builder.addCase(insertBook.rejected, (state, action) => {
      state.loading = false;

      state.error = action.payload as string;
    });

    // delete book from api
    builder.addCase(deleteBook.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      state.books = state.books.filter((book) => book.id !== action.payload.id);
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default bookSlice.reducer;

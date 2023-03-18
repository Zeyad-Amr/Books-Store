import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { getBooks, BooksState, Book } from "../../store/bookSlice";
import { AuthState } from "../../store/authSlice";

const BookContainer = () => {
  const dispatch = useAppDispatch();
  const bookState: BooksState = useSelector((state: any) => state.books);
  const authState: AuthState = useSelector((state: any) => state.auth);
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  useEffect(() => {
    return () => {
      dispatch(getBooks());
    };
  }, [dispatch]);

  const getBookId = (id: number) => {
    const selectedBook = bookState.books.find((book) => book.id === id);
    if (selectedBook) {
      setSelectedBook(selectedBook);
    }
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            bookState={bookState}
            authState={authState}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo selectedBook={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;

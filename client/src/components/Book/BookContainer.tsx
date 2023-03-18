import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { getBooks, BooksState } from "../../store/bookSlice";
import { AuthState } from "../../store/authSlice";

const BookContainer = () => {
  const dispatch = useAppDispatch();
  const bookState: BooksState = useSelector((state: any) => state.books);
  const authState: AuthState = useSelector((state: any) => state.auth);
  useEffect(() => {
    return () => {
      dispatch(getBooks());
    };
  }, [dispatch]);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList bookState={bookState} authState={authState} />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;

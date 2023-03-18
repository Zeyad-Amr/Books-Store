import React, { Fragment } from "react";
import { Book } from "../../store/bookSlice";
const BookInfo = (props: { selectedBook: Book }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {props.selectedBook.id === undefined ? (
        <div className="alert alert-secondary" role="alert">
          There is no books selected yet. Please select!
        </div>
      ) : (
        <div>
          <p className="fw-bold">Title: {props.selectedBook.title}</p>
          <p className="fw-light">
            Description: {props.selectedBook.description}
          </p>
          <p className="fw-light">Author: {props.selectedBook.author}</p>
          <p className="fst-italic">Price: {props.selectedBook.price}</p>
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;

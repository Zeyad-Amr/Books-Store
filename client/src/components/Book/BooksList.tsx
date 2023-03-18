import React from "react";
import { BooksState, deleteBook } from "../../store/bookSlice";
import { AuthState } from "../../store/authSlice";
import { useAppDispatch } from "../../store";

export interface BooksListProps {
  bookState: BooksState;
  authState: AuthState;
}
const BooksList = (props: BooksListProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Books List</h2>
      {props.bookState.loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {props.bookState.books.length === 0
            ? "There are no books yet."
            : props.bookState.books.map((book) => (
                <li
                  className="list-group-item d-flex  justify-content-between align-items-center"
                  key={book.id}
                >
                  <div>{book.title}</div>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary">
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={!props.authState.isLoggedIn}
                      onClick={() => {
                        dispatch(deleteBook(book))
                          .unwrap()
                          .then((originalPromiseResult) => {
                            console.log(originalPromiseResult);
                            alert("Book deleted successfully");
                          })
                          .catch((rejectedValueOrSerializedError) => {
                            console.log(rejectedValueOrSerializedError);
                            alert("Book could not be deleted");
                          });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default BooksList;

import React, { useRef, FormEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { insertBook, Book } from "../store/bookSlice";
import { AuthState } from "../store/authSlice";
const Addform = () => {
  const authState: AuthState = useSelector((state: any) => state.auth);

  const dispatch = useAppDispatch();
  const title = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const book: Book = {
      id: 0,
      description: description.current?.value ?? "",
      price: parseInt(price.current?.value ?? "0"),
      title: title.current?.value ?? "",
    };
    console.log(book);
    dispatch(insertBook(book));

    if (title.current) title.current.value = "";
    if (price.current) price.current.value = "";
    if (description.current) description.current.value = "";

    price.current!.value = "";
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        {authState.isLoggedIn ? <h5>Hello, {authState.name}</h5> : null}
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows={3}
              required
              ref={description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!authState.isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { AuthState, logInOrOut } from "../store/authSlice";

const Header = () => {
  const { error } = useSelector((state: any) => state.books);
  const authState: AuthState = useSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(logInOrOut("Zeyad"))}
        >
          {authState.isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;

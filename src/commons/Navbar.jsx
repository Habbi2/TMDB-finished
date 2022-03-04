import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../state/userReducer";
import Search from "./Search";

function Navbar() {
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };
  return (
    <div className="navbar">
      <Link to="/" className="title">
        TMDB
      </Link>
      <Search></Search>
      <div className="navbar-right">
        {!User.username ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <p>{User.username}</p>
            <button onClick={(e) => handleClick(e)}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

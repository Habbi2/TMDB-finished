import Navbar from "../commons/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userReducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const obj = { username: state.username, password: state.password };
    obj[e.target.name] = e.target.value;
    setState(obj);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", state)
      .then((res) => {
        if (res.data.username) {
          dispatch(setUser(res.data));
          navigate("/");
        } else {
          console.log("error");
        }
      })
      .catch((err) => err);
  };
  return (
    <div className="login">
      <Navbar></Navbar>
      <div className="login-form">
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <h1>Login</h1>
          <div>
            <input
              className="username"
              name="username"
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              className="password"
              name="password"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <button className="submit-login" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

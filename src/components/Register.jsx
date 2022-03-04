import Navbar from "../commons/Navbar";
import { useState } from "react";
import axios from "axios";

function Register() {
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
      .post("/api/register", state)
      .then((res) => res)
      .catch((err) => err);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="login-form">
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <h1>Register</h1>
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

export default Register;

import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/style.scss";
import { Provider } from "react-redux";
import store from "./state/store";
import Movie from "./components/Movie";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

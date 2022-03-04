// Configuración del server
const express = require("express");
const app = express();
const routes = require("./routes/Auth");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const flash = require("express-flash");

app.use(express.json());
app.use(morgan("tiny"));

app.use(cors());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  sessions({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api", routes);

app.listen(3001, () => {
  console.log("Server corriendo en localhost:3001");
});

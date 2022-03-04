const express = require("express");
const db = require("../models/index");
const Users = db.users;
const router = express.Router();
const passport = require("passport");

router.use(passport.initialize());
router.use(passport.session());

require("../controllers/passport")(passport);

router.get("/users", (req, res) => {
  Users.findAll().then((response) => console.log(response));
});

router.get("/users/delete", (req, res) => {
  Users.destroy({ where: {}, truncate: true }).then((res) => res);
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  Users.create({ username: username, password: password }).then((res) => res);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) return;
    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.send(user);
    });
  })(req, res, next);
});

module.exports = router;

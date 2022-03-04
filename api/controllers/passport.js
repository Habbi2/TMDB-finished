const db = require("../models/index");
const Users = db.users;
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      (username, password, done) => {
        console.log("hola");
        Users.findOne({ where: { username: username } })
          .then((user) => {
            if (!user) {
              return done(null, false);
            }

            bcrypt.hash(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false);
              }

              return done(null, user);
            });
          })
          .catch(done);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Users.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });
};

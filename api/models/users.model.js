const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    salt: {
      type: Sequelize.STRING,
    },
  });

  Users.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return bcrypt.hash(user.password, user.salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });

  Users.getAllUsers = () => {
    return Users.findAll().then((res) => res);
  };
  return Users;
};

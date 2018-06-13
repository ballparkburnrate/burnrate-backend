module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 00000,
      validate: {
        len: [5]
      }
    }
  });

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Income, {
      onDelete: "cascade"
    });
  };

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Cash, {
      onDelete: "cascade"
    });
  };

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };


  return User;
};



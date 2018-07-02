module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define("Todo", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Todo;
  };


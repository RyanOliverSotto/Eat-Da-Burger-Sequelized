module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Burger;
};

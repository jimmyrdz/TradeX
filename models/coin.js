// ------------------ SEQUELIZE - DB COIN TABLES
module.exports = function(sequelize, DataTypes) {
  var coin = sequelize.define("coin", {
    // ------------------ NAME
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // ------------------ PRICE
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    amount: DataTypes.INTEGER
  });

  
  coin.associate = function(models) {
    coin.belongsTo(models.coinType);
    coin.belongsTo(models.portfolio);
  };

  return coin;
};

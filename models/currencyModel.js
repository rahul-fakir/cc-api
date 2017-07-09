module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    currencyCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Currency.associate = (models) => {
    Currency.hasMany(models.Wallet, {
      foreignKey: 'currencyCode',
    });
    Currency.hasMany(models.Key, {
      foreignKey: 'currencyCode',
    });
    Currency.hasMany(models.AllowedCurrency, {
      foreignKey: 'currencyCode',
    });
  };

  return Currency;
};

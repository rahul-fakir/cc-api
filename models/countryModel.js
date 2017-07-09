module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    maxSendKeys: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxReceiveKeys: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Country.associate = (models) => {
    Country.hasMany(models.User, {
      foreignKey: 'countryCode',
    });
    Country.hasMany(models.IdType, {
      foreignKey: 'countryCode',
    });
    Country.hasMany(models.AllowedCurrency, {
      foreignKey: 'countryCode',
    });
  };

  return Country;
};

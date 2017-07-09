module.exports = (sequelize, DataTypes) => {
  const AllowedCurrency = sequelize.define('AllowedCurrency', {
    allowedCurrencyId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
  });

  return AllowedCurrency;
};

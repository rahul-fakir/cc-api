module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    walletId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentBalance: {
      type: DataTypes.DECIMAL(15, 15),
      allowNull: false,
    },
    availableBalance: {
      type: DataTypes.DECIMAL(15, 15),
      allowNull: false,
    },
  });

  Wallet.associate = (models) => {
    Wallet.hasMany(models.Transaction, {
      foreignKey: 'sourceWallet',
    });
    Wallet.hasMany(models.Transaction, {
      foreignKey: 'targetWallet',
    });
    Wallet.hasMany(models.Key, {
      foreignKey: 'walletId',
    });
  };

  return Wallet;
};

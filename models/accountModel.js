module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    accountId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    accountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Account.associate = (models) => {
    Account.hasMany(models.Wallet, {
      foreignKey: 'accountId',
    });


  };

  return Account;
};

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sourceAmount: {
      type: DataTypes.DECIMAL(15, 15),
      allowNull: false,
    },
    exchangeRate: {
      type: DataTypes.DECIMAL(15, 15),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Transaction;
};

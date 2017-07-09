module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    keyId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    keyType: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Key;
};

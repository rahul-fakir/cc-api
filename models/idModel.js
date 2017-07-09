module.exports = (sequelize, DataTypes) => {
  const Id = sequelize.define('Id', {
    idDetailId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    idValue: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Id;
};

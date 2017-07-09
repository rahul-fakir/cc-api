module.exports = (sequelize, DataTypes) => {
  const IdType = sequelize.define('IdType', {
    idCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  IdType.associate = (models) => {
    IdType.hasMany(models.Id, {
      foreignKey: 'idCode',
    });
  };

  return IdType;
};

module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define(
    'goods', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumb_url: DataTypes.STRING
    }, {
      tableName: 'goods'
    }
  )

  goods.associate = function (models) {
    // associations can be defined here
  }

  return goods
}

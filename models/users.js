module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nick_name: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      open_id: DataTypes.STRING,
      session_key: DataTypes.STRING
    }, {
      tableName: 'users'
    }
  )

  users.associate = function (models) {
    // associations can be defined here
  }

  return users
}

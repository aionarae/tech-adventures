const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostComment extends Model {}

// PostComment contains the comment, the username of the comment creator, and date when the comment was created

PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'postComment'
  }
);

module.exports = PostComment;

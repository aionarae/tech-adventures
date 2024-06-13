const User = require('./User');
const Post = require('./Post');

// user has many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// post belongs to one user
Post.belongsTo(User, {
  foreignKey: 'username'
});

module.exports = { User, Post };
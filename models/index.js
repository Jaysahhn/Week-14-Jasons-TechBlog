const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post');

// Define associations
User.hasMany(Blog, {
    foreignKey: 'user_id',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

Blog.hasMany(Post, {
    foreignKey: 'blog_id',
});

Post.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

module.exports = { User, Blog, Post };


module.exports = { User, Blog };
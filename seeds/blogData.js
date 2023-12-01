const { Blog } = require('../models');

const blogdata = [
    {
        title: 'TechBlog',
        user: 'JasonM',
        post_date: 'November 30, 2023',
        content: 'This is the first post!',

    },
    {
        title: 'Sand + Sea = Summer',
        user: 'S_Photo',
        post_date: 'June 10, 2019',
        content: 'This is the second post!',

    },
    {
        title: 'Third box',
        user: 'whaddup',
        post_date: 'June 10, 2019',
        content: 'This is the Third post!',
    },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
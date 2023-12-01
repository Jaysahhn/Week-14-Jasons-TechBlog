const { Blog } = require('../models');

const blogdata = [
    {
        title: 'TechBlog',
        user: 'JasonM',
        post_date: 'November 30, 2023',
        content: 'This is the first post!',

    },
    {
        title: 'The Birth',
        user: 'BijanO',
        post_date: 'December 7, 1069',
        content: "Allah's strongest warrior",

    },
    {
        title: 'The Rumbling',
        user: 'CadyT',
        post_date: 'August 1, 854',
        content: 'Shinzo wo Sasageyo!',
    },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
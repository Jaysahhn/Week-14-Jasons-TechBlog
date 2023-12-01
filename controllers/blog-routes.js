const router = require('express').Router();
const { Blog } = require('../models');

router.post('/post', async (req, res) => {
    try {
        const { title, content } = req.body;
        const username = req.session.username;
        const newBlogPost = await Blog.create({
            title,
            content,
            user: username,
            post_date: '11/30/2023',
        });

        res.status(200).json(newBlogPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    };
});

module.exports = router;
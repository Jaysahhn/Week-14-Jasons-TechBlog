const router = require('express').Router();
const { Blog, User, } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        let userName = '';

        if (req.session.loggedIn) {
            const user = await User.findByPk(req.session.userId);
            if (user) {
                userName = user.username;
            };
        };

        res.render('homepage', {
            blogs: blogs.map((blog) => ({ ...blog.toJSON(), blogContent: blog.content })),
            loggedIn: req.session.loggedIn,
            userName: userName,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    };
});



router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    };
    res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;
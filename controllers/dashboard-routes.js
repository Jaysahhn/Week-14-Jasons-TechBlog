const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User }],
        });

        res.render('dashboard', {
            posts: postData.map((post) => post.get({ plain: true })),
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});
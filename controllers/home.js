const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogsData = await Blog.findAll();
    console.log(dbBlogsData);
    const blogData = dbBlogsData.map((blogData) =>
    blogData.get({ plain: true }));
    res.render('homepage', {
      blogData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


   router.get('/login', async (req, res) => {
    res.render('login-user');
  });

module.exports = router;
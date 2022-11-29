const router = require('express').Router();
const { User, Blog } = require('../models');

router.get("/newuser", async (req, res) => {
  res.render("signup");
});

   router.get('/login', async (req, res) => {
    res.render('login-user');
  });
// router.get('/', async (req, res) => {
//   try {
//     const dbBlogsData = await Blog.findAll();
//     console.log(dbBlogsData);
//     const blogData = dbBlogsData.map((blogData) =>
//     blogData.get({ plain: true }));
//     res.render('homepage', {
//       blogData,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// router.get("/:id", authMiddleware, async (req, res) => {
router.get("/", async (req, res) => {
  const dbBlogsData = await Blog.findAll();
  //   {
  //     order: [
  //       ["date_created", "DESC"],
  //     ]
  //   }
  // );
  // console.log(dbBlogsData);
  const blogData = dbBlogsData.map((blog) =>
  blog.get({ plain: true })
  );
  // console.log(blogData);

  res.render("homepage", {blogData});
});

   router.get('/login', async (req, res) => {
    res.render('login-user');
  });

module.exports = router;
const router = require('express').Router();
const { User, Blog } = require('../../models');

// GET all blogs 
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Blog,
          attributes: ['name', 'description'],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) =>
      gallery.get({ plain: true })
    );

    req.session.save(() => {
      res.render('homepage', {
        blogs,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// router.get('/blogs/:id', async (req, res) => {
//   try {
//     const dbBlogsDataId = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: Blog,
//           attributes: [
//             'id',
//             'name',
//             'description',
//             'date_created',
//             'user_id',
//           ],
//         },
//       ],
//     });

//     const blog = dbBlogsDataId.get({ plain: true });
//     res.render('blog', {
//       blog,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


module.exports = router;

// const router = require('express').Router();
// const { Blog } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogData) {
//       res.status(404).json({ message: 'No blog found with this id!' });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

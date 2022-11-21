const router = require('express').Router();
const homeRoutes = require('./home');
const blogRoutes = require('./blogRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/blog', blogRoutes);

// const path = require('path');

module.exports = router;
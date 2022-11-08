const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/traveller', travellerRoutes);

module.exports = router;

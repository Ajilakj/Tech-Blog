const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [{ model: Traveller }],
    });
    res.status(200).json(tripsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveller }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No locationData found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

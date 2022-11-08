const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tripsData = await Trips.findAll({
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
    const tripsData = await Trips.findByPk(req.params.id, {
      include: [{ model: Traveller }],
    });

    if (!tripsData) {
      res.status(404).json({ message: 'No tripsData found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

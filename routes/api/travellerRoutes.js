const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
      include: [{ model: Location }, { model: Trips }],
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location }, { model: Trips }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

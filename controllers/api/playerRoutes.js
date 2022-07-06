const router = require('express').Router();
const { Player } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlayer = await newPlayer.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:number', withAuth, async (req, res) => {
  try {
    const playerData = await Player.destroy({
      where: {
        number: req.params.number,
        user_id: req.session.user_id,
      },
    });

    if (!playerData) {
      console.log('u r screwed');
      res.status(404).json({ message: 'No player found with this number!' });
      return;
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

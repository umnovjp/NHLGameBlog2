const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const playerRoutes = require('./playerRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/players', playerRoutes);

module.exports = router;

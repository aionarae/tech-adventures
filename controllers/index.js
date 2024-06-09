// Import router express and api routes
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

// Use api routes and home routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
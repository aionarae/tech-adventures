// Import router express and api routes
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

// Use api routes and home routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
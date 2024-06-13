// / is the homepage
// /dashboard is the dashboard page
// /blog is the blog page
// /blog/:id is the blog post page
// /logout logs you out
//  i'm using miro to create workflow diagrams to figute out routes and models

const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// routes for homepage

module.exports = router;
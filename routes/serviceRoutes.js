/**
 * routes/serviceRoutes.js
 * Defines all application routes and maps them to controllers
 */

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// ─── Page Routes ─────────────────────────────────────────────────────────────
router.get('/',          serviceController.getHome);
router.get('/about',     serviceController.getAbout);
router.get('/services',  serviceController.getServices);
router.get('/register',  serviceController.getRegister);
router.get('/login',     serviceController.getLogin);
router.get('/signup',    serviceController.getSignup);

// ─── Form Submission Routes ───────────────────────────────────────────────────
router.post('/register', serviceController.postRegister);
router.post('/login',    serviceController.postLogin);
router.post('/signup',   serviceController.postSignup);

module.exports = router;

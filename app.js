/**
 * app.js - Main Entry Point
 * Smart Home Service Booking System
 * Advanced Web Programming Assignment
 */

const express = require('express');
const path = require('path');
const ejs = require('ejs');

// Import Routes
const serviceRoutes = require('./routes/serviceRoutes');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// ─── View Engine Configuration ───────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── Middleware ───────────────────────────────────────────────────────────────
// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/', serviceRoutes);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n✅  Smart Home Booking System running!`);
    console.log(`🌐  Open: http://localhost:${PORT}\n`);
  });
}

// Export for Netlify Functions
module.exports = app;

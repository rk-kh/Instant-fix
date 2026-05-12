/**
 * controllers/serviceController.js
 * Handles the business logic for each route
 */

// ─── Static Data (replace with DB in MERN upgrade) ───────────────────────────
const services = [
  {
    id: 1,
    title: 'AC Repair & Service',
    description: 'Expert air conditioner installation, repair, and routine maintenance for all brands.',
    icon: 'bi-wind',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    price: 'From Rs. 1,500',
    badge: 'Most Popular'
  },
  {
    id: 2,
    title: 'Electrical Services',
    description: 'Licensed electricians for wiring, panel upgrades, outlets, lighting, and safety inspections.',
    icon: 'bi-lightning-charge',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 'From Rs. 800',
    badge: ''
  },
  {
    id: 3,
    title: 'Plumbing Solutions',
    description: 'Fast and reliable plumbing repairs — leaks, clogs, pipe installation, and bathroom fitting.',
    icon: 'bi-droplet',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    price: 'From Rs. 1,000',
    badge: ''
  },
  {
    id: 4,
    title: 'Mobile & Gadget Repair',
    description: 'Screen replacements, battery swaps, water damage recovery for all smartphone brands.',
    icon: 'bi-phone',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80',
    price: 'From Rs. 500',
    badge: 'New'
  },
  {
    id: 5,
    title: 'Home Cleaning',
    description: 'Deep cleaning, sofa shampooing, kitchen degreasing, and post-renovation cleaning.',
    icon: 'bi-house-heart',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    price: 'From Rs. 2,000',
    badge: ''
  },
  {
    id: 6,
    title: 'Carpenter & Furniture',
    description: 'Custom furniture assembly, wood repair, door fixing, and cabinet installation.',
    icon: 'bi-tools',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    price: 'From Rs. 1,200',
    badge: ''
  }
];

// ─── GET Controllers ──────────────────────────────────────────────────────────

/**
 * GET /
 * Renders the homepage with featured services
 */
exports.getHome = (req, res) => {
  res.render('home', {
    title: 'FixNow — Smart Home Services',
    services: services.slice(0, 3), // show first 3 on home
    activePage: 'home'
  });
};

/**
 * GET /about
 * Renders the About page
 */
exports.getAbout = (req, res) => {
  res.render('about', {
    title: 'About Us — FixNow',
    activePage: 'about'
  });
};

/**
 * GET /services
 * Renders all services
 */
exports.getServices = (req, res) => {
  res.render('services', {
    title: 'Our Services — FixNow',
    services,
    activePage: 'services'
  });
};

/**
 * GET /register
 * Renders the booking/registration form
 */
exports.getRegister = (req, res) => {
  res.render('register', {
    title: 'Book a Service — FixNow',
    services,
    activePage: 'register',
    success: null,
    error: null
  });
};

/**
 * GET /login
 * Renders the login page
 */
exports.getLogin = (req, res) => {
  res.render('login', {
    title: 'Login — FixNow',
    activePage: 'login',
    error: null
  });
};

/**
 * GET /signup
 * Renders the signup page
 */
exports.getSignup = (req, res) => {
  res.render('signup', {
    title: 'Create Account — FixNow',
    activePage: 'signup',
    error: null
  });
};

// ─── POST Controllers ─────────────────────────────────────────────────────────

/**
 * POST /register
 * Handles booking form submission
 */
exports.postRegister = (req, res) => {
  const { name, email, phone, serviceType, address } = req.body;

  // Basic validation
  if (!name || !email || !phone || !serviceType || !address) {
    return res.render('register', {
      title: 'Book a Service — FixNow',
      services,
      activePage: 'register',
      error: 'All fields are required. Please fill in the form completely.',
      success: null
    });
  }

  // In a full MERN app, save to MongoDB here
  console.log('📋 New Booking:', { name, email, phone, serviceType, address });

  res.render('register', {
    title: 'Book a Service — FixNow',
    services,
    activePage: 'register',
    success: `Thank you, ${name}! Your booking for "${serviceType}" has been confirmed. We'll contact you at ${phone} shortly.`,
    error: null
  });
};

/**
 * POST /login
 * Handles login form submission
 */
exports.postLogin = (req, res) => {
  const { email, password } = req.body;

  // Placeholder logic — replace with real auth in MERN
  if (!email || !password) {
    return res.render('login', {
      title: 'Login — FixNow',
      activePage: 'login',
      error: 'Please enter both email and password.'
    });
  }

  // Simulate login success (redirect to home)
  res.redirect('/');
};

/**
 * POST /signup
 * Handles signup form submission
 */
exports.postSignup = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.render('signup', {
      title: 'Create Account — FixNow',
      activePage: 'signup',
      error: 'Passwords do not match. Please try again.'
    });
  }

  // In full MERN: hash password & save to MongoDB
  console.log('👤 New User:', { name, email });
  res.redirect('/login');
};

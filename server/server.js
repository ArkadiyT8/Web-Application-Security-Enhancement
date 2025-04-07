const express = require("express");
const helmet = require("helmet"); // Adds security headers
const csrf = require("csurf"); // Protects against CSRF
const xss = require("xss-clean"); // Sanitizes user input
const rateLimit = require("express-rate-limit"); // Limits requests
const oauth = require("./oauth");

const app = express();
const port = 3000;

// Middleware setup
app.use(helmet()); // Add security headers
app.use(express.json());
app.use(xss()); // Prevent XSS attacks
app.use(csrf({ cookie: true })); // Enable CSRF protection

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// OAuth 2.0 route
app.get("/auth", oauth.authenticate);

// Secure route example
app.post("/secure", (req, res) => {
  res.send("Yo, this route is secure!");
});

// Start the server
app.listen(port, () => {
  console.log(`Yo, server's running at http://localhost:${port}`);
});
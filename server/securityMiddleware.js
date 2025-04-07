// Yo, this middleware adds extra security layers
module.exports = (req, res, next) => {
    // Set Content Security Policy (CSP)
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net;"
    );
  
    // Prevent clickjacking
    res.setHeader("X-Frame-Options", "DENY");
  
    // Block MIME type sniffing
    res.setHeader("X-Content-Type-Options", "nosniff");
  
    next();
  };
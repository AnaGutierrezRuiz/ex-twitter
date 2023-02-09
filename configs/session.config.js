const session = require('express-session');

module.exports.session = session({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized : false,
  cookie: { 
    httpOnly: true,
    secure: process.env.SESSION_SECURE === 'true'
  }
})


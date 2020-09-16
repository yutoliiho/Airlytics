// IMPORT DEPENDENCIES:
const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// ROUTES
app.get('/guests', (req, res) => {
  res.send('hi');
})

// START SERVER
app.listen(PORT, (err) => {
  if (err) {
    console.log('errorr')
  } else {
    console.log(`server is running on port ${PORT}`);
  }
})


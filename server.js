// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'dist')));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



import express from 'express';
import path from 'path';
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

const express = require('express');
const app = express();

const port = 5000;

app.get('/api/message', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

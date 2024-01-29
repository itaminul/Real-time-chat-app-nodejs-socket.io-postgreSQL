const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!jj');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
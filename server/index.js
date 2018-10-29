const express = require('express');

const app = express();
const port = 3003;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

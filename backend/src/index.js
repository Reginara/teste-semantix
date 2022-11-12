const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

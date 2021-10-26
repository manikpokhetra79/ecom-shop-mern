const express = require('express');
const PORT = process.env.PORT || 5000;
const colors = require('colors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use('/', require('./routes'));
// start server
app.listen(PORT, function (err) {
  if (err) {
    console.log('Error while connecting to Express Server');
    return;
  }
  console.log(
    `Express Server running in ${process.env.NODE_ENV} mode at : ${PORT} port`
      .yellow.italic
  );
});

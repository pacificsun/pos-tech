const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(app, () =>
  console.log(chalk.blue(`Server started on port ${PORT}`))
);

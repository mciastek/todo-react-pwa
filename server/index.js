require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] });

const path = require('path');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

// Support Gzip
app.use(compression());

// Setup logger
app.use(morgan('combined'));

// Serve static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

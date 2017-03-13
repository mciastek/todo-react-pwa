require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] });
require('dotenv').config();

const path = require('path');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const webpush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

webpush.setGCMAPIKey(process.env.GCM_API_KEY);
webpush.setVapidDetails(
  'mailto:miroslaw.ciastek@gmail.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// Support Gzip
app.use(compression());

// Setup logger
app.use(morgan('combined'));

app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/notification', function(req, res) {
  const subscription = req.param('subscription');
  const message = req.param('message');

  webpush.sendNotification(
    subscription,
    message
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

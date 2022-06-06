const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: true, // all origins permitted
    credentials: true,
  }),
);

// app.use(
//   require('codebit-express-fileupload')({
//     limits: {
//       fileSize: 300 * 1024 * 1024, //50MiB
//     },
//     abortOnLimit: true,
//   }),
// );

// const AWS = require('aws-sdk/index');
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// app.set('aws', AWS);
// global['AWS'] = AWS;

const { router } = require('./server/routes/index');
router(app);

app.listen(process.env.SERVER_PORT);

app.use(express.static(`${__dirname}/client/build`));
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');
const logger = require('./configs/logger.config');

const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => {
  logger.info('Connected to MongoDB');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  logger.info(`App Running on: ${port}..`);
});

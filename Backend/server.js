const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const logger = require('./configs/logger.config');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => {
  logger.info('Connected to MongoDB');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  logger.info(`App Running on: ${port}..`);
});

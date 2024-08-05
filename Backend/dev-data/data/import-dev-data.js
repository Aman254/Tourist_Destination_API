const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
const logger = require('../../configs/logger.config');

dotenv.config({ path: '../../config.env' });

const DB = process.env.DATABASE;

//Connecting to MongoDb Databse
mongoose
  .connect(DB, { serverSelectionTimeoutMS: 60000 })
  .then(() => logger.info('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    logger.info('Data successfully loaded!');
  } catch (err) {
    logger.error(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    logger.info('Data successfully deleted!');
  } catch (err) {
    logger.error(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

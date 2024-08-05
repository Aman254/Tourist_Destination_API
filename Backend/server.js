const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => {
  console.log('Connected to MongoDB');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App Running on: ${port}..`);
});

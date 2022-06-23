require('dotenv').config();
const mongoose = require('mongoose');
const gracefulShutdown = require('http-graceful-shutdown');
const app = require('../config/middleware');
const Router = require('../config/router');

app.use('', Router);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    gracefulShutdown(app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`)));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

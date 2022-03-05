require('dotenv').config();
const express = require('express');
const app = new express();
const router = require('./router');
const db = require('./Models/index');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

(() => {
  db.mongoose.connect(process.env.DB_URL, () => {
    console.log('Mongoose connected!');
  });
  app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
  });
})();

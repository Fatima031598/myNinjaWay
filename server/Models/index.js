const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const mangaSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  genre: [String],
  chapters: [
    {
      chapter_id: Number,
      chapter_images: [String],
    },
  ],
});

const db = {};
db.mangas = mongoose.model('Mangas', mangaSchema);
db.mongoose = mongoose;

module.exports = db;

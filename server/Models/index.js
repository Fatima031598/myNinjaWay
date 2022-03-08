const mongoose = require('mongoose');

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

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: String,
  phone_number: String,
  email: String,
  password: String,
  image: String,
  favorite_mangas: [],
});

const db = {};
db.Users = mongoose.model('Users', userSchema);
db.Mangas = mongoose.model('Mangas', mangaSchema);
db.mongoose = mongoose;

module.exports = db;

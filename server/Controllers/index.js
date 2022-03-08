const db = require('../Models/index');

async function getMangas(req, res) {
  try {
    console.log('inside get request');
    const mangas = await db.Mangas.find({});
    res.status(200);
    res.send(mangas);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ error: 'Internal server error' });
  }
}

async function postMangas(req, res) {
  try {
    console.log(req.body);
    const savedMangas = await db.Mangas.insertMany(req.body);
    res.status(201);
    res.send(savedMangas);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ error: 'Internal server error' });
  }
}

async function postUser(req, res) {
  try {
    console.log(req.body);
    const savedUser = await db.Users.create(req.body);
    res.status(201);
    res.send(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ error: 'Internal server error' });
  }
}
const login = async (req, res) => {
  console.log('inside login');
  try {
    const userInfo = await db.Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (userInfo) {
      res.status(200);
      res.send(userInfo);
    } else {
      res.status(500);
      res.send({ error: 'user not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

module.exports = { getMangas, postMangas, postUser, login };

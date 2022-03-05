const db = require('../Models/index');

async function getMangas(req, res) {
  try {
    console.log('inside get request');
    const mangas = await db.mangas.find({});
    res.send(mangas);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.send({ error: 'Internal server error' });
    res.status(500);
  }
}

async function postMangas(req, res) {
  try {
    console.log(req.body);
    const savedEvent = await db.mangas.insertMany(req.body);
    res.send(savedEvent);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.send({ error: 'Internal server error' });
    res.status(500);
  }
}

module.exports = { getMangas, postMangas };

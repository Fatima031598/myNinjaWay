const router = require('express').Router();
const controller = require('./Controllers/index');

router.get('/mangas', controller.getMangas);
router.post('/mangas', controller.postMangas);
router.post('/users', controller.postUser);
router.post('/login', controller.login);

module.exports = router;

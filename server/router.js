const router = require('express').Router();
const controller = require('./Controllers/index');

router.get('/mangas', controller.getMangas);
router.post('/mangas', controller.postMangas);

module.exports = router;

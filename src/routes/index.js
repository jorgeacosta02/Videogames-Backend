const { Router } = require('express');
const videoRouter = require('./videogameRouter');
const genreRouter = require('./genreRouter');

const router = Router();

router.use('/videogames', videoRouter);
router.use('/genres', genreRouter);

module.exports = router;

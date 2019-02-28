const express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const router = express.Router();

const punkAPI = new PunkAPIWrapper();

router.get('/beers', async (req, res, next) => {
  try {
    const beers = await punkAPI.getBeers();
    console.log(beers);
    res.render('beers', { beers });
  } catch (error) {
    next(error);
  }
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/random-beer', async (req, res, next) => {
  try {
    const randomBeerArray = await punkAPI.getRandom();
    res.render('random-beer', { beer: randomBeerArray[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

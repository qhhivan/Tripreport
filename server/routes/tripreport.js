const express = require('express');
const {
  getCitys,
  getAttractions,
  getTrips,
  getPictures,
  getPicture,
  getTrip,
  deleteTrip,
  deletePicture,
  postTrip,
  postPicture,
  patchTrip,
} = require('../controllers/tripreport');

const router = express.Router();

router.get('/citys', getCitys);
router.get('/attractions', getAttractions);
router.get('/trips', getTrips);
router.get('/pictures', getPictures);
router.get('/pictures/:id', getPicture);
router.get('/trips/:id', getTrip);

router.delete('/trips/:id', deleteTrip);
router.delete('/pictures/:id', deletePicture);

router.post('/trips', postTrip);
router.post('/pictures', postPicture);

router.patch('/trips/:id', patchTrip);

module.exports = router;

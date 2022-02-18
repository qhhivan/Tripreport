/* eslint-disable operator-linebreak */
const asyncHandler = require('express-async-handler');
const model = require('../model/tripreport');

const getCitys = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getCitys());
});

const getAttractions = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getAttractions());
});

const getTrips = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTrips());
});

const getPictures = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getPictures());
});

const getTrip = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTrips(req.params.id));
});

const getPicture = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTrips(req.params.id));
});

// hole ich mir den ganzen Trip aus der url und wenn der nicht 0 ist dann löschen
const deleteTrip = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getTrip({ id });
  if (rows.length > 0) {
    model.deleteTrip(id);
    res
      .status(200)
      .send(`Der Trip mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Der Trip mit der ID ${id} wurde nicht gefunden`);
  }
});

const deletePicture = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getPicture(id);
  if (rows.length > 0) {
    await model.deleteTrip(id);
    res
      .status(200)
      .send(`Das Bild mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Das Bild mit der ID ${id} wurde nicht gefunden`);
  }
});

const postTrip = asyncHandler(async (req, res) => {
  const { properties } = req.body;
  if (!properties) {
    res.status(400).send('Eine oder mehrere Properties fehlen');
  } else res.status(201).json(await model.postTrip(req.body));
});

const postPicture = asyncHandler(async (req, res) => {
  const { properties } = req.body;

  // Wenn Properties fehlen bzw falsch eingegeben werden
  if (!properties) {
    res.status(400).send('Eine oder mehrere Properties fehlen');
  } else {
    res
      .status(201)
      .json(await model.postPicture(req.body))
      .send('Ein Bild wurde erfolgreich hinzugefügt');
  }
});
const patchTrip = asyncHandler(async (req, res) => {
  res.status(200).json(await patchTrip(req.params.id, req.body));
});

module.exports = {
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
};

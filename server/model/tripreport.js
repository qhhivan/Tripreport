const db = require('../db');

// GET
const getCitys = async () => {
  const { rows } = await db.query('SELECT');
  return rows;
};

const getAttractions = async () => {
  const { rows } = await db.query('SELECT');
  return rows;
};

const getTrips = async () => {
  const { rows } = await db.query('SELECT');
  return rows;
};

const getPictures = async () => {
  const { rows } = await db.query('SELECT');
  return rows;
};

const getPicture = async (id) => {
  const { rows } = await db.query('SELECT', [id]);
  return rows;
};

const getTrip = async (id) => {
  const { rows } = await db.query('SELECT', [id]);
  return rows;
};
// GET ENDE

// DELETE
const deleteTrip = (id) => {
  db.query('DELETE', [id]);
  return 'Trip ID Erfolgreich gelöscht';
};

const deletePicture = (id) => {
  db.query('DELETE', [id]);
  return 'Trip ID Erfolgreich gelöscht';
};
// DELETE ENDE

// POST/ Hinzufügen
const postTrip = async (id, { properties }) => {
  const { rows } = await db.query('INSERT', [id, properties]);
  return rows;
};

const postPicture = async (id, { properties }) => {
  const { rows } = await db.query('INSERT', [id, properties]);
  return rows;
};
// POST ENDE

// PATCH/ UPDATE
// Patch  Trip-Name
const patchTrip = async (id, { properties }) => {
  await db.query('UPDATE', [id, properties]);
  return 'Update Erfolgreich';
};
// PATCH ENDE

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

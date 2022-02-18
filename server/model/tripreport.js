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
// GET ENDE

// DELETE
const deleteTrip = () => {
  db.query('SELECT', []);
  return 'Trip ID Erfolgreich gelöscht';
};

const deletePicture = () => {
  db.query('SELECT', []);
  return 'Trip ID Erfolgreich gelöscht';
};
// DELETE ENDE

// POST/ Hinzufügen
const postTrip = async () => {
  const { rows } = await db.query('SELECT', []);
  return rows;
};

const postPicture = async () => {
  const { rows } = await db.query('SELECT', []);
  return rows;
};
// POST ENDE

// PATCH/ UPDATE
// Patch  Trip-Name
async function patchTrip() {
  await db.query('SELECT', []);
  return 'Update Erfolgreich';
}
// PATCH ENDE

module.exports = {
  getCitys,
  getAttractions,
  getTrips,
  getPictures,
  deleteTrip,
  deletePicture,
  postTrip,
  postPicture,
  patchTrip,
};

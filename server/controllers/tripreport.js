/* eslint-disable operator-linebreak */
const asyncHandler = require('express-async-handler');
const model = require('../model/tripreport');

const getTeilnehmers = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTeilnehmers());
});

const getTrainings = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTrainings());
});

const getTeilnehmerAnzahlUndStatus = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getTeilnehmerAnzahlUndStatus(req.params.id));
});

const getTeilnehmerWithTraining = asyncHandler(async (req, res) => {
  const { trainingsid } = req.params;
  const rows = await model.getTeilnehmerWithTraining(req.params.trainingsid);
  if (rows.length === 0) {
    res
      .status(404)
      .send(
        `Für die ID ${trainingsid} wurde kein Trainings gefunden. Bitte versuchen Sie es mit einem anderen Training`,
      );
  } else res.status(200).json(rows);
});

const deleteTeilnehmer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getTeilnehmer({ id });
  if (rows.length > 0) {
    model.deleteTeilnehmer(id);
    res
      .status(200)
      .send(`Der Teilnehmer mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res
      .status(404)
      .send(`Der folgende Teilnehmer mit der ID ${id} wurde nicht gefunden`);
  }
});

const deleteTraining = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getTrainings(id);
  if (rows.length > 0) {
    await model.deleteTraining(id);
    res
      .status(200)
      .send(`Das Training mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Das Training mit der ID ${id} wurde nicht gefunden`);
  }
});

const postTeilnehmer = asyncHandler(async (req, res) => {
  const { vorname, nachname, geburtsdatum, email, passwort } = req.body;
  if (!vorname || !nachname || !geburtsdatum || !email || !passwort) {
    res
      .status(400)
      .send(
        'One or more properties missing: vorname, nachname, geburtsdatum, email, passwort',
      );
  } else res.status(201).json(await model.postTeilnehmer(req.body));
});

const postTraining = asyncHandler(async (req, res) => {
  // eslint-disable-next-line max-len
  const {
    trainingsid,
    datum,
    beginn,
    ort,
    kosten,
    minimum,
    maximum,
    trainerid,
    ende,
    eintragefrist,
  } = req.body;
  if (
    !trainingsid ||
    !datum ||
    !beginn ||
    !ort ||
    !kosten ||
    !minimum ||
    !maximum ||
    !trainerid ||
    !ende ||
    !eintragefrist
  ) {
    res
      .status(400)
      .send(
        'One or more properties missing: trainingsid, datum, beginn, ort, kosten, minimum, maximum, trainerid, ende, eintragefrist',
      );
  } else res.status(201).json(await model.postTraining(req.body));
});

module.exports = {
  getTrainings,
  getTeilnehmerWithTraining,
  deleteTeilnehmer,
  postTeilnehmer,
  getTeilnehmers,
  postTraining,
  getTeilnehmerAnzahlUndStatus,
  deleteTraining,
};

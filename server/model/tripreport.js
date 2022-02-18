const db = require('../db');

// const getTrainings = async () => {
//   const { rows } = await db.query(
// eslint-disable-next-line max-len
//     'SELECT teilnehmer.vorname  as Teilnehmer_Vorname,teilnehmer.nachname as Teilnehmer_Nachname,t2.vorname as Trainer_Vorname,t2.nachname as Trainer_Nachname,datum as Datum,status as Status from teilnehmer join teilnehmer_training tt on teilnehmer.teilnehmer_id = tt.teilnehmer_id join trainings t on t.trainings_id = tt.trainings_id join trainer t2 on t2.trainer_id = t.trainer_id;',
//   );
//   return rows;
// };

const getTeilnehmers = async () => {
  const { rows } = await db.query('SELECT * FROM teilnehmer order by teilnehmer_id');
  return rows;
};

const getTrainings = async () => {
  const { rows } = await db.query('select * from trainings');
  return rows;
};

async function getTeilnehmerWithTraining(trainingsid) {
  const { rows } = await db.query(
    'select teilnehmer.vorname, teilnehmer.nachname,teilnehmer.teilnehmer_id, status from teilnehmer join teilnehmer_training tt on teilnehmer.teilnehmer_id = tt.teilnehmer_id where tt.trainings_id = $1;',
    [trainingsid],
  );
  return rows;
}

async function getTeilnehmerAnzahlUndStatus(id) {
  const { rows } = await db.query(
    'SELECT tt.status, COUNT(*) as anzahl from teilnehmer JOIN teilnehmer_training tt USING(teilnehmer_id) JOIN trainings USING(trainings_id) where trainings_id=$1 GROUP by tt.status',
    [id],
  );
  return rows;
}

const deleteTraining = (id) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  db.query('DELETE FROM trainings WHERE trainings_id = $1;', [id]);

const deleteTeilnehmer = (id) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  db.query('DELETE FROM teilnehmer WHERE teilnehmer_id = $1;', [id]);

const getTeilnehmer = async (param) => {
  let result = null;
  if (param.id) {
    result = await db.query('SELECT * FROM teilnehmer WHERE teilnehmer_id = $1', [param.id]);
  }
  return result.rows;
};

const postTeilnehmer = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO teilnehmer (teilnehmer_id, vorname, nachname, geburtsdatum, email, passwort) VALUES ($1,$2,$3,$4,$5,$6) returning *',
    [body.teilnehmerid, body.vorname, body.nachname, body.geburtsdatum, body.email, body.passwort],
  );
  return rows;
};
const postTraining = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO trainings (trainings_id, datum, beginn, ort, kosten, minimum, maximum, trainer_id, ende, eintragefrist) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *',
    [
      body.trainingsid,
      body.datum,
      body.beginn,
      body.ort,
      body.kosten,
      body.minimum,
      body.maximum,
      body.trainerid,
      body.ende,
      body.eintragefrist,
    ],
  );
  return rows;
};

module.exports = {
  getTrainings,
  getTeilnehmerWithTraining,
  deleteTeilnehmer,
  getTeilnehmer,
  postTeilnehmer,
  getTeilnehmers,
  postTraining,
  getTeilnehmerAnzahlUndStatus,
  deleteTraining,
};

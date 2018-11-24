const db = require('./index');

module.exports.getAllImagesById = (houseID) => {
  const queryString = 'SELECT imageUrl FROM images WHERE houseID = $1';
  return db.query(queryString, [houseID]);
};

module.exports.postAllImages = (houseID, imageUrls) => {
  let queryString = 'INSERT INTO images (imageUrl, houseID) VALUES ';
  const images = [];
  const queries = imageUrls.map((img, i) => ` (${i * 2 + 1}, ${i * 2 + 2})`);
  imageUrls.forEach((image) => { images.push(image, houseID); });
  queryString += queries.join(',');
  return db.query(queryString, [...images]);
};

// Dont think this will work.
module.exports.updateAllImages = (houseID, imageUrls) => {
  let queryString = 'INSERT INTO images (imageUrl, houseID) VALUES ';
  const images = [];
  const queries = imageUrls.map((img, i) => ` (${i * 2 + 1}, ${i * 2 + 2})`);
  imageUrls.forEach((image) => { images.push(image, houseID); });
  queryString += queries.join(',');
  queryString += 'ON DUPLICATE KEY UPDATE imageUrl=VALUES(imageUrl), houseID=VALUES(houseID)';
  return db.query(queryString, [...images]);
};

module.exports.deleteAllImages = (houseID) => {
  const queryString = 'DELETE FROM images WHERE houseId = $1';
  return db.query(queryString, [houseID]);
};

module.exports.getImage = (id) => {
  const queryString = 'SELECT imageUrl FROM images WHERE id = $1';
  return db.query(queryString, [id]);
};

module.exports.addImage = ({ imageUrl, houseId }) => {
  const queryString = 'INSERT INTO images (imageUrl, houseID) VALUES ($1, $2)';
  return db.query(queryString, [imageUrl, houseId]);
};

module.exports.updateImage = ({ imageUrl, houseId, id }) => {
  const queryString = 'UPDATE images SET imageUrl = $1, houseID = $2 WHERE id = $3';
  return db.query(queryString, [imageUrl, houseId, id]);
};

module.exports.deleteImage = (id) => {
  const queryString = 'DELETE FROM images WHERE id = $1';
  return db.query(queryString, [id]);
};
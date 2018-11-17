require('dotenv').config();
const faker = require('faker');

const homeUrlBase = `${process.env.S3_BUCKET}/assets/media`;

module.exports.addressesCreate = () => {
  const streetNames = new Set();
  faker.seed(123);
  while (streetNames.size < 1000) {
    streetNames.add(faker.address.streetName());
  }
  return Array.from(streetNames);
};

const addresses = module.exports.addressesCreate();

const getHomeName = (id) => {
  const numbers = 10000;
  const streetName = addresses[Math.floor(id / numbers)];
  let name = String((id % numbers) + 1); // Add number
  name += ` ${streetName}`;
  return name;
};

module.exports.imagesCreate = (start, stop, scale) => {
  let writeString = '';
  const st = start * scale;
  const sp = stop * scale;
  for (let i = st; i < sp; i += 1) {
    const imageUrl = `${homeUrlBase}/home${faker.random.number({ min: 1, max: 150 })}.jpg`;
    const homeId = faker.random.number({ min: start, max: stop });
    const homeName = getHomeName(homeId);
    // writeString += Buffer.from(`${i + 1},'${imageUrl}',${homeId + 1},'${homeName}'\n`);
    writeString += Buffer.from(`'${imageUrl}',${homeId + 1},'${homeName}'\n`);
  }
  return writeString;
};

const fsPromises = require('fs').promises;
const path = require('path');
const { imagesCreate, addressesCreate } = require('./fakeData');

let handle = '';
const writeAddresses = false;

if (writeAddresses) {
  const addressFile = path.resolve(__dirname, './addresses.txt');
  fsPromises.open(addressFile, 'w')
    .then((fh) => {
      handle = fh;
      return handle.writeFile(addressesCreate().join('\n'));
    })
    .then(() => handle.close())
    .catch(err => console.log(`Error writing ${err}`));
}

// Writing out records for images
const file = path.resolve(__dirname, './test_small.csv');
console.log('writing to here', file);
const imagesCols = Buffer.from('location,homeId,homeName\n');

fsPromises.open(file, 'w')
  .then((fh) => {
    handle = fh;
    return handle.writeFile(imagesCols);
  })
  .then(() => {
    const rows = 1e5;
    const recurseWrite = (step) => {
      if (step === 0) {
        return handle.writeFile(imagesCreate(step * rows, (step + 1) * rows, 4));
      }
      return recurseWrite(step - 1)
        .then(() => handle.writeFile(imagesCreate(step * rows, (step + 1) * rows, 4)));
    };

    return recurseWrite(9);
  })
  .then(() => handle.close())
  .then(() => console.log('Done!'))
  .catch(err => console.log(`Error writing ${err}`));

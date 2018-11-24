const helpers = {};

helpers.stringPxToNum = (string) => {
  const num = string.split('px');
  return Number(num[0]);
};

helpers.getHouseIdFromUrl = (pathname) => {
  const splitString = pathname.split('/');
  return splitString[2];
};

export default helpers;

function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function randomHexStr(length) {
  let str ='';
  for (let i = 0; i < 6; i++) {
    str += randomChar('0123456789ABCDEF');
  }

  return str;
}
export { randomHexStr };
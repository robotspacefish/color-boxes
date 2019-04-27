function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

export { randomChar };
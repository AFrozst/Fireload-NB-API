const bcryptjs = require("bcryptjs");

/**
 * Encrypts the password
 * Password Plain Text
 * @param {*} passwordPlain
 * @returns
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 * Compares the password with the encrypted password
 * @param {*} passwordPlain
 * @param {*} hashPassword
 * @returns
 */
const compare = async (passwordPlain, hashPassword) => {
  const result = await bcryptjs.compare(passwordPlain, hashPassword);
  return result;
};

module.exports = { encrypt, compare };

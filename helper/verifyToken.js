// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const jwt = require('jsonwebtoken');
require('dotenv').config;

module.exports.verifyToken = async function  (context) {
  let token;
  const authHeader =
    context.headers.authorization || context.headers.Authorization;
  console.log(authHeader); 
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    console.log(token);
    try {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(user, ':loggedin details');
      return user;
    } catch (error) {
      console.error('JWT Verification Error:', error);
      return null;
    }
  }
  if (!token) {
    return null;
  }
};

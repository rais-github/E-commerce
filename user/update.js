// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const { verifyToken } = require('../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser = await verifyToken(context);
  let {name}=params;
  if (tokenUser != null) {
    const { _id } = tokenUser;
    const userTable = aircode.db.table('user');
    const user = await userTable
      .where({ _id })
      .projection({ isAdmin: 0, password: 0, accessToken: 0 })
      .findOne();
    user.name=name
    try {
      await userTable.save(user);
      context.status(200);
      return { ...user };
    } catch (error) {
      context.status(500);
      return {
        message: error.message,
      };
    }
  } else {
    context.status(401);
    return {
      message: 'Invalid Token or User not auhtorised',
    };
  }
};

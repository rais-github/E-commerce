// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const { verifyToken } = require('../../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser = await verifyToken(context);

  if (tokenUser != null) {
    const orderTable = aircode.db.table('order');

    const orders = await orderTable.where({userId:tokenUser._id}).find();
    const count = await orderTable.where().count();

    return {
      count,
      orders,
    };
  } else {
    context.status(401);
    return {
      message: 'Invalid Token or user not authorised',
    };
  }
};

// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const { verifyToken } = require('../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser = await verifyToken(context);
  if (tokenUser != null) {
    const {_id, products, amount, address, status } = params;

    const orderTable = aircode.db.table('order');

    try {
      const order = await orderTable.where({ _id }).findOne();

      if (!tokenUser.isAdmin && status.toLowerCase() !== 'cancelled') {
        context.status(400);
        return {
          message: 'Order update not allowed',
        };
      } else {
        order.status = status || order.status;
        order.address = address || order.address;
        order.products = products || order.products;
        const result = await orderTable.save(order);
        context.status(200);
        return {
          result,
        };
      }
    } catch (error) {
      context.status(500);
      return {
        message: error.message,
      };
    }
  } else {
    context.status(401);
    return {
      message: 'Token invalid or You are not authorised',
    };
  }
};

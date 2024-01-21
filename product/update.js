// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const { verifyToken } = require('../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser = await verifyToken(context);
  if (tokenUser != null && tokenUser.isAdmin) {
    const { _id , title,description,inStock,category,price,color,size } = params;
    const productTable = aircode.db.table('product');
    const product = await productTable
      .where({ _id })
      .findOne();
    product.title=title
    try {
    const result =  await productTable.save(params);
      context.status(200);
      return { ...result };
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

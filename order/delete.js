// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const {verifyToken} = require('../helper/verifyToken');

module.exports = async function (params, context) {
    const tokenUser= await verifyToken(context);
  // console.log(tokenUser);
  if(tokenUser!=null && tokenUser.isAdmin){
      const { _id }= params;
    const orderTable = aircode.db.table('order');
      const order  = await orderTable.where({ _id }).findOne();
    try{
      const result = await orderTable.delete(order);
      context.status(204);
      return{ result};
    }
    catch(error){
      context.status(500);
      return {
        "message":error.message
      }
    }
  }else{
    context.status(401);
    return{
      message:"Invalid Token or User not auhtorised"
    }
  }
};

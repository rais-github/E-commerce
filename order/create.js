// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const {verifyToken} = require('../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser  = await verifyToken(context);
  if(tokenUser !=null){
    const { products,amount,address,status }=params;
    if(!products || !address || !status || !amount){
      context.status(400);
      return {
        "message":"Product , Address , Status , Amout are mandatory"
      }
    }

    const orderTable = aircode.db.table('order');

    try{
      const order={
        ...params,
        userId:tokenUser._id
      }
        const result = await orderTable.save(order);
      context.status(201);
      return {
        result
      }
    }catch(error){
      context.status(500);
      return {
        "message":error.message
      }
    }
  }else{
    context.status(401);
    return {
      "message":"Token invalid or You are not authorised"
    }
  }

};

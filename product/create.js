// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const {verifyToken} = require('../helper/verifyToken');

module.exports = async function (params, context) {
  const tokenUser  = await verifyToken(context);
  if(tokenUser !=null && tokenUser.isAdmin===true){
    const { title,description,inStock,category,price,color,size }=params;
    if(!title || !category || !price){
      context.status(400);
      return {
        "message":"Title , Price , Category are mandatory"
      }
    }

    const productTable = aircode.db.table('product');

    const productExists = await productTable.where({title}).findOne();

    if(productExists){
      context.status(400);
      return {
        "message":"Product already Exists"
      }
    }
    try{
        const result = await productTable.save(params);
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
      "message":"Token invalid or You are not the admin"
    }
  }

};

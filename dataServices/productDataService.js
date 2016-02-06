module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getProducts = function(cb){
      execute('SELECT * FROM product,image WHERE image.product_id = product.id',cb);
  }
  this.getProduct = function(id,cb){
      execute('SELECT * FROM product,image WHERE image.product_id = product.id and product.id= ?',id,cb);
  }
  

}

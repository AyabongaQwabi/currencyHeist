module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getProducts = function(cb){
      execute('SELECT * FROM product,image WHERE image.product_id = product.id',cb);
  }
  

}

module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getFeatured = function(cb){
      execute('select * from featured',cb);
  }
  

}

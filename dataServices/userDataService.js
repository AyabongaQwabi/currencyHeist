module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getUsers = function(cb){
      execute('select * from user',cb);
  }
  

}

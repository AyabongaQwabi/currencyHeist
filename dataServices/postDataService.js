module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getPosts = function(cb){
      execute('select * from post where type=1',cb);
  }
  

}

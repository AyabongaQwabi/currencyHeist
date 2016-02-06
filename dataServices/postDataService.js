module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getPosts = function(cb){
      execute('select * from post ,image where image.post_id=post.id',cb);
  }
  
  this.getBlogpost = function(post_id,cb){
  	execute('select * from post , image where image.post_id =post.id and post.id= ?',post_id,cb)
  }

}

module.exports = function(connection){

  

  var execute = function(query, data, cb){
      connection.query(query, data, cb);
  };



  this.getFeaturedPosts = function(cb){
      execute('SELECT * FROM post,image WHERE post.type=1 and image.post_id = post.id ',cb);
  }
  this.getBanners = function(cb){
      execute('select * from banner ',cb);
  }

}

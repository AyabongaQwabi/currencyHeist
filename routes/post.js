//var bcrypt = require('bcrypt');
var count = 0;
var user = {};
lock = false;
var startupNum = 0;
module.exports = function(){

  this.showLatest = function(req, res, next){
  		console.log('\n'+req.url)

        req.services(function(err,services){
          
              var postService = services.postsDataServ;
              postService.getPosts(function(err, results) {
                 if (err) return next(err);               
                 
                 res.render('blog',  {posts: results});
                 console.log(results)
              });
         
           
           
           
         })
    };
 this.showBlog = function(req, res, next){
 	    console.log('\n'+req.url)
 		console.log('fetching blog post'+req.params.id)
        req.services(function(err,services){
              var id =req.params.id
              var postService = services.postsDataServ;
              postService.getBlogpost(id,function(err, results) {
                 if (err) return next(err);              
                 console.log(results)
                 results[0].detail =results[0].detail.replace('\n','')
                 res.render('blogpost',  {post: results[0]});

              });
         
           
           
           
         })
    };
  
}


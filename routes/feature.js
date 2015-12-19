//var bcrypt = require('bcrypt');
var count = 0;
var user = {};
lock = false;
var startupNum = 0;
module.exports = function(){

  this.showFeatured = function(req, res, next){

        req.services(function(err,services){
          
              var featureService = services.featureDataServ;

              featureService.getFeaturedImages(function(err, images) {
                 if (err) return next(err); 
                 featureService.getFeaturedPosts(function(err,posts){
                        if (err) return next(err); 
                 		images.forEach(function(image){
		                  	if(image['selling_item']==0){
		                      image['selling_item']=false;
		                 	}
		                 	else{
		                 		image['selling_item']=true;
		                 	}
		                 })
		                 res.render('main',  {featured: images ,posts:posts});
		                 console.log(posts)





                 })              
                 

              });
         
           
           
           
         })
    };

  
}


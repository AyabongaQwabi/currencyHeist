//var bcrypt = require('bcrypt');
var count = 0;
var user = {};
lock = false;
var startupNum = 0;
module.exports = function(){

  this.showFeatured = function(req, res, next){

        req.services(function(err,services){
          
              var featureService = services.featureDataServ;

              featureService.getBanners(function(err, images) {
                 if (err) return next(err); 
                 featureService.getFeaturedPosts(function(err,posts){
                        if (err) return next(err); 
                     		images.forEach(function(image){
    		                  	if(image['product_id']!=null){
    		                      image['product']=true;
      		                 	}
      		                 	else{
      		                 		image['post']=true;

      		                 	}
    		                 })
		                 res.render('main',  {featured: images ,posts:posts});
		                 console.log(images)

                 })              
                 

              });
         
           
           
           
         })
    };

  
}


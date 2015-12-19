//var bcrypt = require('bcrypt');
var count = 0;
var user = {};
lock = false;
var startupNum = 0;
module.exports = function(){

  this.showFeatured = function(req, res, next){

        req.services(function(err,services){
          
              var featureService = services.featureDataServ;
              featureService.getFeatured(function(err, results) {
                 if (err) return next(err);               
                 
                 res.render('main',  {featured: results});

              });
         
           
           
           
         })
    };

  
}


//var bcrypt = require('bcrypt');
var count = 0;
var user = {};
lock = false;
var startupNum = 0;
module.exports = function(){

  this.showLatest = function(req, res, next){

        req.services(function(err,services){
          
              var trendService = services.trendsDataServ;
              trendService.getTrends(function(err, results) {
                 if (err) return next(err);               
                 
                 res.render('fashion',  {trends: results});

              });
         
           
           
           
         })
    };

  
}


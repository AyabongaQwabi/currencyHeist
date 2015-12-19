
module.exports = function(){

  this.showLogin = function(req, res, next){

        req.services(function(err,services){
          
              var userService = services.userDataServ;
              res.render('login');

           
         })
    };

  
}


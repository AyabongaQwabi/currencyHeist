module.exports = function(){

	  this.showProducts = function(req, res, next){

	        req.services(function(err,services){
	              console.log('Showing products')
	              var productService = services.productDataServ;
	              productService.getProducts(function(err, products){
	              		if(err)(console.log('\tERR:'+err))
	              		res.render('shop',{products:products})
	              		console.log('\tPRODUCTS')
	              		console.log(products)
	              })
	        })
	  }

 }
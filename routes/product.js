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
	  this.getProduct = function(req, res, next){

	        req.services(function(err,services){
	              console.log('get product info')
	              var id = req.params.id;
	              var productService = services.productDataServ;
	              productService.getProduct(id,function(err, product){
	              		if(err)(console.log('\tERR:'+err))
	              		console.log('found product:\n'+JSON.stringify(product))
	              		res.send({product:product})
	              		
	              })
	        })
	  }

 }
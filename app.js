var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    trendsMethods = require('./routes/trends'),
    postsMethods = require('./routes/post'),
    featureMethods = require('./routes/feature'),
    userMethods =require('./routes/user')
    trendsDataService = require('./dataServices/trendsDataService'),
    postsDataService = require('./dataServices/postDataService'),
    featureDataService = require('./dataServices/featureDataService'),
    userDataService = require('./dataServices/userDataService'),
    ConnectionProvider = require('./routes/connectionProvider');
    //session = require('express-session');


var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'theaya5379',
      port: 3306,
      database: 'currencyHeist'
};

var serviceSetupCallback = function(connection){
	return {
		trendsDataServ : new trendsDataService(connection),
    postsDataServ : new postsDataService(connection),
    featureDataServ : new featureDataService(connection),
    userDataServ : new userDataService(connection)
	}
};

var myConnectionProvider = new ConnectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);
app.use(myConnection(mysql, dbOptions, 'pool'));
app.use(cookieParser());
app.use(session({secret:'currencyHeistSessionSecret'}));

app.engine('handlebars', exphbs({defaultLayout: 'navigation'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var feature = new featureMethods();
var trends = new trendsMethods();
var posts = new postsMethods();
var user = new userMethods();

app.get('/', feature.showFeatured);
app.get('/login',user.showLogin)
app.get('/trends', trends.showLatest);
app.post('/blog',posts.showLatest)

app.use(function(req,res,next){
   console.log('req.url'+req.url+'\nreq.session.user : '+JSON.stringify(req.session.user))
    if(req.session.user){
      next();
    }
    else{
      res.render('login')
    }
})



/*
app.get('/startup/comp/:id', startup.startupComp);
app.get('/startup/new/:id', startup.newStartup);
app.post('/startup/new/add/:id', startup.addStartup);

var organiser = new OrganiserMethods();
app.get('/org/compList', organiser.showOrgList);
app.get('/org/comp/new', organiser.newComp);
app.post('/org/comp/new/add', organiser.addComp);
app.get('/org/comp/:id', organiser.comp);
app.get('/org/comp/delete/:id', organiser.delComp);
app.get('/org/startup/delete/:id', organiser.delStartup);

var judge = new JudgeMethods();
app.get('/judge/compList', judge.showCompList);
app.get('/judge/results/:entrant_id', judge.showEntrantResult);
app.post('/judge/results/updateScoreFeedback/:entrant_id/:score_id', judge.updateScoreFeedback);
app.get('/judge/compList/entrants/:competition_id',judge.showCompEntrants);
app.get('/judge/:competition_id/:id', judge.judge);
app.post('/judge/:competition_id/:id', judge.scoreStartup);
app.get('/judge/comp/:competition_id/totals', judge.totals);


//middleware user check
//app.use(main.middleCheck);
*/
var port = process.env.PORT || 3100;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('currency Heist runnin at http://%s:%s', host, port);

});

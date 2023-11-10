const apiKey = "U2FsdGVkX1/1QwWXJeA8YFgqFkv58NEn/gi9TTtJauH62YQW/OLhiSYpbwyFievjsFRyPkYrgcVkdk539+HRg/FsY53ZkGB+a5IgrOjizKY00RwTgv/pSdrY9VCBK9ViDfyZHEx8v/hyFNGGXEQ0vo4W473azwxFM5VT3rD7R0I="
	
const tokenExpiryDuration = 60000
var clientUserName = "demo";
var streamingAppInfo = 
				{
					"core": 
											  {
												
												"domain": "connector_ms6.eagle3dstreaming.com",
												"userName": clientUserName,
												"appName": "ue52",
												"configurationName": "0"
												
											  },
				  
					"configurationToOverride": 
											  {
												
												
											  }
				}
				

function GenerateStreamingSessionToken(res,indexCP_dist=false) 
{
	
	const axios = require("axios");	
	
	axios.post(
				"https://token.eaglepixelstreaming.com/api/v1/token/create", 
				{
					"object" : streamingAppInfo,
					"expiry": tokenExpiryDuration,
					"client" : clientUserName
				}, 
				{
				  headers: {"Authorization": "Auth "+apiKey }
				}
	
			 )
			 .then((response) => 
			  {
				//console.dir(response);
				console.log("response.token :" +response.data.token);
				
				if(response.data.error)
					console.log("response.error :" +response.data.error);
	
			
				
				var obj={ 		
								
								
								token: response.data.token,
								clientUserName: clientUserName,
						}
									 
			console.log("obj passing to ejs view :" +  JSON.stringify(obj) );		
			res.render("player", obj);
			
        
      })
	  .catch(err => 
									{
									  console.error(err);
									  console.log(err);
								});	
}





var express = require("express");
var app = express();




const path = require("path");

const fs = require("fs");

 const options = {

	key: fs.readFileSync(path.join(__dirname, "./sslCertificates/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "./sslCertificates/cert.pem")),

 };

  var https = require("https").Server(options, app);

  https.listen(55555, function () {
    console.log("Https listening on *55555: " );
  });
  

var isAuthenticated = (redirectUrl) =>
									  function (req, res, next)
									  {
										return next();
									  };


		
app.use("/src", [isAuthenticated("/login"),express.static(path.join(__dirname, "/src")),]);
app.use("/dist", [  isAuthenticated("/login"),express.static(path.join(__dirname, "/dist")),]);

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/scripts_demo", express.static(path.join(__dirname, "./scripts_demo")));


app.set('view engine', 'ejs'); 

app.get("/testToken/",

  function (req, res) 
  {
	 
		
		
		 GenerateStreamingSessionToken(res,false) 
		
		
  }
);


app.get("/testToken/indexCP_dist",

  function (req, res) 
  {
	
		
		
		 GenerateStreamingSessionToken(res,true) 
		
		
  }
);






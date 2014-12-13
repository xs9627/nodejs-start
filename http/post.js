var http = require("http");
var querystring = require("querystring");

http.createServer(function (request, response) {
	var postData = "";
	var responseString = "";

	response.writeHead(200, {"content-type": "text/html"});
	
	if(request.method =="POST") {
		request.setEncoding("utf8");
		request.addListener("data", function (postDataChunk) {
			postData += postDataChunk;
		});

		request.addListener("end", function() {
			var objectPostData = querystring.parse(postData);
			console.log(postData);
			for (var i in objectPostData) {
				responseString += i + "=>" + objectPostData[i] + "<br>";
			}

			response.write(responseString);

			response.end();
		});
	}
}).listen(2014);

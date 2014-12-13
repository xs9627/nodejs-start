var timer =  require("timers");
var http = require("http");

var i = 0;
timer.setInterval(function () {
	//console.log("haha" + i++);
	PostData("haha=" + i++);
}, 1000);

function PostData(codestring) {
	var post_options = {
		host: "localhost",
		port: "2014",
		method: "POST"
	};
	
	var post_req = http.request(post_options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('Response:' + chunk);
		});
	});

	post_req.write(codestring);
	post_req.end();
}
			
		

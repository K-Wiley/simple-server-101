let http = require('http');
http.createServer(function(req,res) {
    res.write("Hello K2 Tech!");
    res.end();
}).listen(8080);


// To exit in terminal press CTRL + C
var https = require('https');
// var express = require('express');  
// var app = express();  
  
// app.use(express.static("App"));  
  
// app.get('/', function (req, res) {  
//     res.redirect('/');  
// });  
// app.listen(4200, 'localhost');

// -------------------------------------------------
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });

// --------------------------------------
// var express = require('express');
// var app = express();
// var port = 4000;

// app.js

// ---------------working

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
     

    var options = {
      host: 'google.com',
      method: 'get',
      path: '/'
    };

    let jsonFile = require('jsonfile');
    
    var req = https.request(options,
      function (res) {
        var percert = res.socket.getPeerCertificate(); 
        var auth = res.socket.authorized;
        var prot = res.socket.getProtocol();
       // var check = res.checkServerIdentity(hostname,cert);
        console.log('certificate authorized:' + res.socket.authorized);
        console.log('certificate authorized:' + res.socket.getPeerCertificate());
        console.log(auth);
        console.log(percert);
        console.log('Protocol used ' + prot);
        jsonFile.writeFile('auth.json', auth);
        jsonFile.writeFile('PeerCertificate.json', percert);
        jsonFile.writeFile('Protocol.json', prot);
       // console.log(check);
    
      }).on('error', (e) => {
        console.error(e);
    });
    // fs.writeFile("output.json", percert, 'utf8', function (err) {
    //   if (err) {
    //       console.log("An error occured while writing JSON Object to File.");
    //       return console.log(err);
    //   }
   
    //   console.log("JSON file has been saved.");
    res.end('Hello World!\n');
    req.end(); 
    



});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');


// const socket = require('tls').connect(443, "www.digg.com", () => {
//   console.log('client connected',
//     socket.authorized ? 'authorized' : 'unauthorized');
//   process.stdin.pipe(socket);
//   process.stdin.resume();
// });





// request({
//   url: 'github.com'
// })
// .on('error', function(err) {
//     console.log('err:', err);
// })
// .on('response', function (res) {
//   console.log('peerCertificate:',res.socket.getPeerCertificate());
//   console.log('authorized:',res.socket.authorized);
//   console.log('authorizationError:',res.socket.authorizationError);
// });
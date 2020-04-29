const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonfile = require('jsonfile')


const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from Server');
})

app.post('/enroll',function(req, res){
    console.log(req.body);
     let a = req.body.url;
   // console.log("us sare game mai jana san hu  tere "+ a);
    res.status(200).send({"message": "Data received."});
    jsonfile.writeFile('url.json', a, function (err) {
        if (err) console.error(err)
      })
         //Website IP Address
   var dns = require('dns');
   var w = dns.lookup(req.body.url,function(err,address,family){
     console.log('address: %j family: IPv%s', address, family);
    //  jsonFile.writeFile('../src/assets/ip.json', address, function(err){
    //    done(err);
    //  });
     jsonFile.writeFile('../src/assets/ip.json', address);
     jsonFile.writeFile('../src/assets/family.json', "IPv"+family);
})
})

app.listen(PORT, function(){
    console.log("Server running on port : "+ PORT);
})


var https = require('https');
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
      //  console.log('certificate authorized:' + res.socket.authorized);
      //  console.log('certificate authorized:' + res.socket.getPeerCertificate());
        // console.log(auth);
        // console.log(percert);
        // console.log('Protocol used ' + prot);
        jsonFile.writeFile('../src/assets/auth.json', auth);
        jsonFile.writeFile('../src/assets/PeerCertificate.json', percert);
        jsonFile.writeFile('../src/assets/Protocol.json', prot);
       // console.log(check);
       var wt = res.socket.getPeerCertificate().raw;
       jsonFile.writeFile('../src/assets/full.json', wt);
    
      }).on('error', (e) => {
        console.error(e);
    });


//     console.log('Is authorized:' + res.socket.authorized);

//     var fullcertchain = res.socket.getPeerCertificate(false);
//   //  console.log(certData);
  //var ht = JSON.stringify(fullcertchain);
//   jsonFile.writeFile('fullcertchain.json', fullcertchain);
       
//     console.log(JSON.stringify(fullcertchain));

//     var PeerCert = res.socket.getPeerCertificate(true);
//     console.log(PeerCert);
//     jsonFile.writeFile('PeerCert.json', PeerCert);
    //console.log(JSON.stringify(certDataDetail));

req.end();
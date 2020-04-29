import { Component } from '@angular/core';
import * as fs from 'fs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
//json
import countries from '../assets/countries.json';
import PeerCertificate from '../assets/PeerCertificate.json';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import auth from '../assets/auth.json';
import Protocol from '../assets/Protocol.json';
import ip from '../assets/ip.json';
import family from '../assets/family.json';
import { error } from 'util';
import value from '../assets/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Malsite';
  value = 'Clear me';
  players : any = PeerCertificate;
  url_data:FormGroup;

  submitted = false;

  onSubmit()
  {
    //console.log("hihihihih"+this.url_data);
  }
  //json
  public countryList:{name:string,code:string}[] = countries;
  //public cert:{issuer:string,valid_to:string}[]= countries;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)
   { }

ngOnInit(){
//  this.cert = PeerCertificate;
  var esp = PeerCertificate;
  //console.log(esp.raw.toString('utf8'));
  //console.log(esp.subjectaltname);
  var x = document.getElementById("mg");
  x.innerHTML = "<h4>Suject Alternative Name (SANs) :</h4>" + esp.subjectaltname;
  // var a = document.getElementById("subject");
  // a.innerHTML = esp.subject.C;
  //main
  var x = document.getElementById("cn");
  x.innerHTML = "<h4>Comman Name : </h4>" + esp.subject.CN;
  var x = document.getElementById("org");
  x.innerHTML = "<h4>Oragnization : </h4>" + esp.subject.O;
  var a = document.getElementById("loc");
  a.innerHTML = "<h4>Location : </h4>" + esp.subject.L +" , "+ esp.subject.ST +" , "+ esp.subject.C;
  var a = document.getElementById("vf");
  a.innerHTML = "<h4>Valid from : </h4>" + esp.valid_from;
  var a = document.getElementById("iss");
  a.innerHTML = "<h4>ISSUER :</h4>" + esp.issuer.CN;
  var a = document.getElementById("srn");
  a.innerHTML = "<h4>serial Number : </h4>" + esp.serialNumber;
  var a = document.getElementById("fp");
  a.innerHTML = "<h4>fringerprint :</h4>" + esp.fingerprint;

  //intermediate certificate
  var x = document.getElementById("intcn");
  x.innerHTML = "<h4>Common name / Suject  : </h4>" + esp.issuer.CN;
  var x = document.getElementById("intorg");
  x.innerHTML = "<h4>Oragnization : </h4>" + esp.issuer.O;
  var a = document.getElementById("intloc");
  a.innerHTML = "<h4>Location : </h4>" + esp.issuer.C;
  var a = document.getElementById("intvf");
  a.innerHTML = "<h4>Valid from : </h4>" + esp.valid_from;

  var a = document.getElementById("exp");
  a.innerHTML = "The Certificate expires on " + esp.valid_to;

 //status

 var install = document.getElementById("certinst");
 var congr = document.getElementById("cong");
 
  //auth
  var at = auth;
  var as = document.getElementById("asd");
  as.innerHTML = at;
  if(as.innerHTML == "true")
  {
    as.innerHTML = "'<img src='../assets/images/passed.png' />' <h4>Authentication :</h4>" + "<span style='color:green'>Certificate is Valid .</span>";
    install.innerHTML = "'<img src='../assets/images/passed.png' />' <h4 style='color:green'>TLS Certificate is correctly installed</h4>";
    congr.innerHTML = "<span style='color:green'>Congratulations! This certificate is correctly installed.</span>";
  
  }
  else{
    as.innerHTML = "'<img src='../assets/images/cross.jpg' />' <h4>Authentication :</h4>" + "<span style='color:red'>Certificate is not valid .</span>";
    install.innerHTML = "'<img src='../assets/images/cross.jpg' />' <h4 style='color:red'>TLS Certificate is NOT correctly installed</h4>";
    congr.innerHTML = "<span style='color:red'>This site is not safe . We regret to inform you that this certificate is NOT correctly installed.</span>";
  
  }
  this.url_data = this.formBuilder.group({
    url : ['', Validators.required],
  });

  
//Protocol

var prot = Protocol;
var yt = document.getElementById("protocol");
  yt.innerHTML = "<h4>Protocol used : </h4>" + prot;

  //family

  var fam = family;
  var fa = document.getElementById("family");
  fa.innerHTML = "<h4> Family : </h4> " + fam;

  //IP

  var ipad = ip;
  var q = document.getElementById('ip');
  q.innerHTML = " resolved to "+ipad;

  
//name
var t = document.getElementById("name");
t.innerHTML = "'<img src='../assets/images/passed.png' />'"+esp.subject.CN;

//hostname
var u = document.getElementById("hname");
u.innerHTML = "'<img src='../assets/images/passed.png' />'"+" The hostname "+esp.subject.CN + " is correctly listed in the Certificate. ";
}



Submit(){
  this.submitted = true;
  //document.getElementById("ca").style.display = "block";
  console.log(this.url_data.value);
   return this.http.post<any>('http://localhost:3000/enroll', this.url_data.value)
   .subscribe(
      data => alert('Success!' + JSON.stringify(data)),
      error => {document.getElementById("err").style.display = "block", alert("Server Not available , Please try after sometime .") , console.error('Error!',error)}
      )
   
  }

  submit_1(){
    var https = require('https');
   // let fs = require("fs");
   // var fs = require('graceful-fs')
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

   // let jsonFile = require('jsonfile');
    
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
        alert(percert);
        // jsonFile.writeFile('auth.json', auth);
        // jsonFile.writeFile('PeerCertificate.json', percert);
        // jsonFile.writeFile('Protocol.json', prot);
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
  }
}

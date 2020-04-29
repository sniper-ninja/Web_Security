Type : Front-End 

How to Start : 

Front-End : ng serve / http-server(will open up all 3 diff ip/server as per your system)
Backend : node cert.js(present ../assets under src folder) 

Work Done :

1.Front-End layout
2.Exaction of Certificate info which includes auth , cert detail , protocol 
3.storing above i.e point 2. all result in .json file
4.Fetching of .json created and showing end result to user.

Work to be done :
1.Establishing connection between frontend(url bar) with cert.js(backend script)
(rest showing result and everything is done)
2.Run two server at a time (here we have to manualy start both server)


Working :
cert.js - As per url/link proved it work over 3 layer as follows :-
1.first verify cert auth if its authorized then give boolean value(true/false) true-auth and viz for false and store result into auth.json .
2.After the auth it exact all cert detail e.g origin , provider , sr. number , finger print ,etc and store result into PeerCertificate.json .
3.After this it check protocol type and store result into protocol.json .

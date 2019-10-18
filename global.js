// var dir = __dirname + __filename;

// var path = require('path');

// global.console.log(`we're in ${path.basename(__dirname)}`);

// console.log(global.process.argv);
//

// process.stdout.write("write something" + '\n\n');
// process.stdin.on('data', function (data) {
//     process.stdout.write('\n' + data.toString().trim() + '\n');
// });
// var util = require('util');
// var v8 = require('v8');
// util.log(v8.getHeapStatistics());

// var readline = require('readline');
//
// // Creates an instance of the readling object, which will create a prompt for me by sending it the std i/p & std o/p objects
// var rl = readline.createInterface(process.stdin, process.stdout);
//
// var realPerson = {
//     name: '',
//     sayings: []
// };
//
// // To ask a question and invoke a fn once it's answered (note readline will keep listening until you stop it):
// rl.question("What is a name of a real person?", function (answer) {
//     realPerson.name = answer;
//     rl.setPrompt(`What would ${realPerson.name} say?`);
//     rl.prompt();
//     rl.on('line', function (ans) {
//
//         if (ans.toLowerCase().trim() === 'exit') {
//             rl.close();
//         } else {
//             realPerson.sayings.push(ans);
//             rl.setPrompt("What else?");
//             rl.prompt();
//         }
//     });
//
// });
//
// rl.on('close', function () {
//     console.log(realPerson.sayings.join(','));
//     process.exit();
// });

// var Person = require('./lib/Person');
//
// var ben = new Person('Ben Franklin');
// ben.on('hamada');

// var spawn = require('child_process').spawn;
//
// var child_process = spawn("node", ["--version"]);
//
// // listen for data
// child_process.stdout.on("data", function (data) {
//     console.log(data);
// });
//
// // listen for when child process closes
// child_process.on("close", function () {
//     process.exit();
// });
//
// // we can send some data to the process
// child_process.stdin.write("stop");

// var fs = require('fs');
//
// var stream = fs.createWriteStream('WriteSt.md', '');
// stream.write('Some Name\n============\n\n');
// stream.write('Some other text');
//
// setTimeout(function () {
//
//     stream.close(); // this will close the write stream
//
// }, 1000);
//

// var domain = 'en.wikipedia.org';
// var route = '/wiki/George_Washington';
//
// var https = require('https');
// var fs = require('fs');
//
// // details about the request (object)
// var options = {
//     hostname: domain,
//     port: 443,
//     path: route,
//     method: 'GET'
// };
//
//
// // once the request started, the callback fn will be invoked, and will pass the response object (res implements the stream interface)
// var req = https.request(options, function (res) {
//
//     var responseBody = "";
//
//     console.log("Response from server started");
//
//     // log status
//     console.log(res.statusCode);
//
//     // log headers ( %j logs data as json )
//     console.log("%j", res.headers);
//
//     // by default the encoding will be binary
//     // to set it to a value:
//     res.setEncoding("UTF-8"); // will ensure that the stream will come in as text
//
//     // when the respose fires the first data event, the follow callback will be invoked once
//     res.once('data', function (chunk) {
//         console.log(chunk);
//     });
//
//     // the data events represents a data stream containing a chunk of data (each chunk in this case is a text chunk)
//     res.on('data', function (chunk) {
//         console.log(`Chunk length ${chunk.length}`);
//         responseBody += chunk;
//     });
//
//     // listen to when a res has ended
//     res.on('end', function () {
//         fs.writeFile("George_Washington.html", responseBody, function (err, data) {
//             if (err) {
//                 throw err;
//             }
//             console.log('File Downloaded')
//         });
//     });
// });
//
//
// // if there's any errors in the request, the callback will fire
// req.on('error', function (err) {
//     console.log(`Error with request: ${err}`);
// });
//
// // we also need to end our request
// req.end();
//
// var http = require('http');
//
// // Server instance
//
// var server = http.createServer(function (req, res) {
//     var response_status_code = 200;
//     var headers_that_will_be_added_to_the_response = {
//         "Content-Type": 'text/plain' // tells the browser what type of content we are responding with
//     };
//
//     // write res headers
//     res.writeHead(response_status_code, headers_that_will_be_added_to_the_response);
//
//     // end response and send some data
//     res.end('Hello World');
//
// });
//
// // we should tell this ip instance what ip and port it should listen for incoming requests on
// server.listen(3000); // listen for any request on this local machine port 3000
//
// console.log("Server is listening on port 3000");

// var http = require('http');
// var fs = require('fs');
// var path = require('path');
//
//
// http.createServer(function (req, res) {
//
//     if (req.url === '/') {
//         fs.readFile('./public/index.html', 'UTF-8', function (err, html) {
//             console.log(req.url);
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             });
//
//             res.end(html);
//
//         });
//     } else if (req.url.match(/.css$/)) {
//         var requested_file = path.join(__dirname, 'public', req.url);
//
//         // stream the file
//         var read_file_stream = fs.createReadStream(requested_file, 'UTF-8');
//
//         res.writeHead(200, {"Content-Type": "text/css"});
//
//         read_file_stream.pipe(res);
//
//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/plain'
//         });
//         res.end("Page not found");
//     }
//
// }).listen(3000);

// var http = require('http');
// var json_file = require('./inventory');
//
// http.createServer(function (req, res) {
//
//     res.writeHead(200, {"Content-Type": "text/json"});
//     res.end(JSON.stringify(json_file));
//
// }).listen(3000);


var express = require("express");

var app = express();

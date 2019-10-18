// we create a constructor
var WebSocketServer = require("ws").Server;

// creating an instance of ws server using this constructor
var wss = new WebSocketServer({ port: 3000 });  // this creates a ws server runs on ws:// protocol

// setting up listener for new connections, and that ws connection will be passed to the callback fn as an argument.
// the fn will fire each time a new connection happens
wss.on('connection', function (ws) {

    ws.send("welcome to cyper chat");  // send a message back to a connected client

    // we listen for each individual connection for any messages received from this connection to our socket server
    ws.on('message', function (message) {

        if (message === 'exit') {
            // disconnect this particular connection
            ws.close();
        } else {
            // broadcast the message to all of our clients (conne ctions)
            // wss.clients is an array of all of our connected clients
            wss.clients.forEach(function (client) {
                client.send(message)
            })
        }

    });
});

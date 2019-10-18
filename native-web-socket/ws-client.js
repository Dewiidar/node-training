// we can create a new websocket instance using "new WebSocket()" constructor
var ws = new WebSocket('ws://localhost:3000'); // we need to point out where our websocket server is running

// invoke when websocket opens
ws.onopen = function() {
    setTitle('Connected to cyber chat'); // this is a fn defined in the same js file, you can ignore it.
};

ws.onclose = function() {
    setTitle('Disconnected');
};

// fn invokes when we receive a message from websocket
ws.onmessage = function(payload) {
    printMessage(payload.data); // this is a fn defined in the same js file, you can ignore it.
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');

    // send a message back to a socket server
    ws.send(input.value);

    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}

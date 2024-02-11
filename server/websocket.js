const ws = require('ws');

const wss = new ws.Server({
    port: 5000,
}, () => console.log(`Server started on 5000`))


wss.on('connection', function connection(ws) {
    
    ws.on('message', function (message) {
        message = JSON.parse(message)
        console.log(message)
        switch (message.event) {
          
            case 'message':
                broadcastMessage(message)
                break;
            case 'connection':
                broadcastMessageConnect(message)
                break;
        }
    })
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}
function broadcastMessageConnect(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}

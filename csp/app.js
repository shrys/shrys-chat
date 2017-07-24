const host = `127.0.0.1:57772`;
let ws = new WebSocket(`ws://${host}/csp/chat/Chat.ChatWebSocket.cls`);
ws.addEventListener(`open`,()=>{console.log(`We are connected to the chat!`)});
ws.addEventListener(`error`,(err)=>{console.log(`Connection error`,err)});
ws.addEventListener(`close`,()=>{console.log(`We are disconnected from the chat.`)});
ws.addEventListener(`message`,({ data })=>{console.log(`Data received from the server: `,JSON.stringify(data));});
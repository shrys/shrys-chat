//const host = `ws://${ location.hostname }:57772`;
const myName = "shrys";
const myAvatar = "http://nikita.tk/img/avatar.jpg";

/*let URL = host + "/csp/user/WebCourse.ChatWebSocket.cls",
    ws = new WebSocket(URL);

ws.addEventListener("open", () => ws.send(JSON.stringify({
    name: myName,
    avatar: myAvatar
})));

ws.addEventListener("error", (err) => printMessage({
    name: "System",
    text: "Connection error: " + err.toString()
}));

ws.addEventListener("close", () => printMessage({
    name: "System",
    text: "We're out!"
}));

ws.addEventListener("message", (m) => {
    let message = JSON.parse(m.data);
    if (message["error"])
        return console.error(`Server reporting an error: ${ message.error }`);
    if (message["updates"] instanceof Array) message["updates"].forEach(update => {
        if (update.type === "message")
            printMessage(update);
        else if (update.type === "notification")
            printMessage(update);
        else
            console.warn("Unhandled WebSocket message", message);
    });
});*/

function printMessage ({ date = Date.now(), name, text, avatar = "" }) {
    let block = document.querySelector(".messages");
    block.innerHTML += `<div class="message">
        <div class="col-12 headline">
        <div class="avatar" style="background-image: url(${ avatar })"></div>
        <div class="body">
            <div class="headline">
                <span class="date">${ new Date(date).toLocaleString() }</span>,
                <span class="name">${ name }</span>
            </div>
            <div class="col-12 text">${ text }</div>
        </div>
    </div>`;
    document.body.scrollTop = 99999999;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".input");
    input.addEventListener("keydown", (event) => {
        if (input.value && event.keyCode === 13) {
            //ws.send(JSON.stringify({ "text": input.value }));
            printMessage({name: myName,
                text:input.value});
            input.value = "";
        }
    });
});
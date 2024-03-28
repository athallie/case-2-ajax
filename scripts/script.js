let form = document.querySelector('form#chat-form');
let lastModified = 0;
setInterval(checkForMessages, 1000);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

let sendButton = document.querySelector('button#submit');
sendButton.addEventListener('click', (e) => {
    let message = document.querySelector('input[name="message"]').value;
    console.log("Message: ", message);

    fetch(
        "/scripts/chat.php", {
            method: "post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: "message=" + message
        }
    ).then((response) => {
        response.text().then((text) => {
                console.warn(text);
                let chatbox = document.querySelector('#chatbox');
                fetch(
                    "/data/messages.txt"
                ).then(
                    response => {
                        return response.text();
                    }
                ).then(
                    data => {
                        displayMessage(chatbox, data);
                    }
                )
        });
    })
});

function checkForMessages() {
    let chatbox = document.querySelector('#chatbox');
    fetch(
        "/data/messages.txt"
    ).then(
        response => {
            let lastModifiedHeader = response.headers.get('Last-Modified');
            if (lastModifiedHeader && new Date(lastModifiedHeader) > lastModified) {
                lastModified = new Date(lastModifiedHeader).getTime();
                return response.text();
            } else {
                return Promise.reject("No new messages.");
            }
        }
    ).then(
        data => {
            displayMessage(chatbox, data);
        }
    )
}

function displayMessage(chatbox, data) {
    const messages = data.split('\n');
    const latestMessage = messages[messages.length - 2];
    let cell0 = chatbox.insertRow().insertCell(0);
    cell0.textContent = latestMessage;
}
let form = document.querySelector('form#chat-form');

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
                        const messages = data.split('\n');
                        const latestMessage = messages[messages.length - 2];
                        let cell0 = chatbox.insertRow().insertCell(0);
                        cell0.textContent = latestMessage;
                    }
                )
        });
    })
});
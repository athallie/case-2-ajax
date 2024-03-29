/*Clear session storage on reload*/
window.addEventListener('load', (e) => {
    sessionStorage.clear();
    /*
    * Prevent default
    * */
    let usernameForm = document.querySelector("form#username-form");
    usernameForm.reset();
    usernameForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    let chatForm = document.querySelector('form#chat-form');
    chatForm.reset();
    document.querySelector("button#send-chat").disabled = true;
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
})

/*Variable for username*/
let sessionUsername = null;

/*
* Create txt file for user
* */
let submitUsernameButton = document.querySelector('button#submit-username');
submitUsernameButton.addEventListener('click', (e) => {
    submitUsernameButton.disabled = true;
    document.querySelector("button#send-chat").disabled = false;
    let usernameInput = document.querySelector('input[name="username"]').value;

    /*Store username in session storage*/
    sessionUsername = usernameInput;
    sessionStorage.setItem('username', usernameInput);

    /*Send username to user.php for processing*/
    fetch(
        "/scripts/user.php", {
            method: "post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: "username=" + usernameInput
        }
    ).then((response => {
        response.text().then((username) => {
            console.warn('Username: ' + username);
        })
    }))
});

/*let lastModified = 0;
setInterval(checkForMessages, 1000);*/


/*
* Send Message
* */
let sendButton = document.querySelector('button#send-chat');
sendButton.addEventListener('click', (e) => {
    let formData = {
        "username": sessionStorage.getItem('username'),
        "message": document.querySelector('input[name="message"]').value,
        "date": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }
    console.log(JSON.stringify(formData));

    fetch(
        "/scripts/chat.php", {
            method: "post",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }
    ).then((response) => {
        response.json().then((response) => {
                console.warn(JSON.stringify(response));
                let chatbox = document.querySelector('#chatbox');
                fetch(
                    `/data/${sessionUsername}.txt`
                ).then(
                    response => {
                        return response.text();
                    }
                )/*.then(
                    data => {
                        displayMessage(chatbox, data);
                    }
                )*/
        });
    })
});

/*function checkForMessages() {
    let chatbox = document.querySelector('#chatbox');
    fetch(
        `/data/${sessionUsername}.txt`
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
}*/


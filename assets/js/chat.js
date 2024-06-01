let usernameField = document.querySelector("input[name='username']");
let chatBody = document.querySelector("div#chat-body");
let sendButton = document.querySelector('button#send-message-button');
let textArea = document.querySelector("textarea#message-text-area");

usernameField.value = sessionStorage.getItem("sender");
document.querySelector("h5#receiver-display").textContent = sessionStorage.getItem("receiver");

let editButton = document.querySelector("button#edit-username-button");

setInterval(() => {
    console.log("chatview")
    getChatView(sessionStorage.getItem("sender"), sessionStorage.getItem("receiver"))
}, 1000);

sendButton.addEventListener('click', (e) => {
    sendMessage();
})

usernameField.addEventListener("focusout", (e) => {
    usernameField.value = sessionStorage.getItem("sender")
})

/*Ubah Username*/
editButton.addEventListener("click", (e) => {
    editUsername();
});

function getChatView(sender, receiver) {
    fetch(
        `/index.php?c=Chat&m=getChat`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({sender: sender, receiver: receiver})
        }
    ).then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            refreshTable(chatBody, data);
        }
    )
}

function refreshTable(table, data) {
    table.replaceChildren()
    data.forEach(
        row => {
            let box = document.createElement("div");
            box.classList.add("row", "p-0", "m-0", "mb-2", "container-fluid", "rounded-3", "shadow", "bg-success-subtle");
            box.style.height = "fit-content";

            let messageBox = document.createElement("div");
            messageBox.classList.add("col", "py-3", "ps-3", "d-flex", "flex-column", "justify-content-start", "align-items-bottom");

            let mbLabel = messageBox.appendChild(document.createElement("label"));
            mbLabel.textContent = (row["username_sender"]);
            mbLabel.classList.add("form-label", "text-info-emphasis", "fw-bold");

            let mbP = messageBox.appendChild(document.createElement("p"));
            mbP.textContent = row["message"];
            mbP.classList.add("mb-0", "text-break");
            mbP.style.fontSize = ".75rem";

            box.appendChild(messageBox);

            let dateBox = document.createElement("div");
            dateBox.classList.add("col", "py-2", "pe-3", "d-flex", "flex-column", "justify-content-end", "align-items-bottom")

            let dateText = dateBox.appendChild(document.createElement("div"));
            dateText.classList.add("mb-0", "text-end", "text-black-50");
            dateText.appendChild(document.createElement("p"))
            dateText.style.fontSize = ".6rem";
            dateText.textContent = row["sent_date"];

            box.appendChild(dateBox)

            table.appendChild(box);
        }
    )
}

function editUsername() {
    let oldUsername = usernameField.value;
    usernameField.readOnly = false;
    usernameField.focus({focusVisible: true});
    usernameField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            usernameField.readOnly = true;
            fetch(
                "/index.php?c=User&m=updateUsername", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username: oldUsername, newUsername: usernameField.value})
                }
            )
                .then(response => response.text())
                .then(username => {
                    console.log(username)
                    if (username === "false") {
                        alert("Error: username telah terpakai. Coba gunakan username lain.")
                        usernameField.value = oldUsername;
                    } else {
                        sessionStorage.setItem("sender", usernameField.value)
                    }
                })
        }
    })
}

function sendMessage() {
    let date = new Date();
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    date = date.toISOString().split('.')[0];
    let formData = {
        sender: sessionStorage.getItem('sender'),
        receiver: sessionStorage.getItem('receiver'),
        message: textArea.value,
        date: date
    }
    fetch(
        "/index.php?c=Chat&m=addChat", {
            method: "post",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }
    ).then(
        response => response.text()
    ).then(
        data => {
            console.log(data)
            textArea.value = "";
        }
    )
}
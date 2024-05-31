/*Clear session storage on reload*/
let usernameForm = document.querySelector("form#username-form");

window.addEventListener('load', (e) => {
    sessionStorage.clear();
    /*
    * Prevent default
    * */
    usernameForm.reset();
    usernameForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
});

/*
* Create txt file for user
* */
let submitUsernameButton = document.querySelector('button#start-chat-button');
submitUsernameButton.addEventListener('click', (e) => {
    let fab = window.parent.document.querySelector("button#fab-login");
    let mainIframe = window.parent.document.querySelector("iframe#main-iframe");
    e.preventDefault();
    let sender = document.querySelector('input[name="sender"]').value;
    let receiver = document.querySelector('input[name="receiver"]').value;
    if (sender.trim() === "") {
        sender = "user" + Math.floor(Math.random() * 9000) + 1000;
    //@Kelompok 1 PemWeb E Semester Genap 2023/2024
    } else if (receiver.trim() === "") {
        receiver = sender;
    }

    /*Store username in session storage*/
    sessionStorage.setItem("sender", sender);
    sessionStorage.setItem("receiver", receiver);

    login(sender, receiver);
    mainIframe.style.width = "95%";
    fab.style.translate = "0 -3em";
});

function login(sender, receiver) {
    fetch(
        `/index.php?c=Home&m=login`, {
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
            console.log(data);
            usernameForm.submit();
        }
    )
}

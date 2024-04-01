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
})

/*Variable for username*/
let sessionUsername = null;

/*
* Create txt file for user
* */
let submitUsernameButton = document.querySelector('button#start-chat-button');
submitUsernameButton.addEventListener('click', (e) => {
    // submitUsernameButton.disabled = true;
    /*document.querySelector("button#send-chat").disabled = false;
    document.querySelector("button#submit-profile-pic").disabled = false;*/
    let usernameInput = document.querySelector('input[name="username"]').value;
    if (usernameInput.trim() === "") {
        usernameInput = "user" + Math.floor(Math.random() * 9000) + 1000;
    }

    /*Store username in session storage*/
    sessionUsername = usernameInput;
    sessionStorage.setItem('username', usernameInput);

    /*Send username to username.php for processing*/
    fetch(
        "/Kode/scripts/php/username.php", {
            method: "post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: "username=" + usernameInput
        }
    ).then((response => {
        response.text().then((username) => {
            console.warn('Username: ' + username);

            /*Redirect to chat*/
            window.location.href = 'user_profile.html';
        })
    }))
});

let fabUsername = document.querySelector("button#fab-username");
let chatBox = document.querySelector("div#chat-box-container")
fabUsername.addEventListener("click", (e) => {
    if (chatBox.style.opacity === "1") {
        chatBox.style.opacity = "0";
        fabUsername.style.translate = "0em";
        chatBox.style.translate = "0em"
    } else {
        chatBox.style.opacity = "1";
        fabUsername.style.translate = "-1em";
        chatBox.style.translate = "1em";
    }
});
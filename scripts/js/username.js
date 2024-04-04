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
});


/*Variable for username*/
let sessionUsername = null;

/*
* Create txt file for user
* */
let submitUsernameButton = document.querySelector('button#start-chat-button');
submitUsernameButton.addEventListener('click', (e) => {
    let usernameInput = document.querySelector('input[name="username"]').value;
    if (usernameInput.trim() === "") {
        usernameInput = "user" + Math.floor(Math.random() * 9000) + 1000;
    //@Kelompok 1 PemWeb E Semester Genap 2023/2024
    }

    /*Store username in session storage*/
    sessionUsername = usernameInput;
    sessionStorage.setItem('username', usernameInput);

    /*Send username to username.php for processing*/
    fetch(
        "scripts/php/username.php", {
            method: "post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: "username=" + usernameInput
        }
    ).then((response => {
        response.text().then((username) => {
            console.warn('Username: ' + username);
            window.location.href = "chatbox.html";
        })
    }))
});


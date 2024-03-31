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

    let pictureForm = document.querySelector('form#profile-pic-form');
    pictureForm.reset();
    document.querySelector("button#submit-profile-pic").disabled = true;
    pictureForm.addEventListener('submit', (e) => {
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
    document.querySelector("button#submit-profile-pic").disabled = false;
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


/*
* Submit Profile Picture
* */
let submitProfilePictureButton = document.querySelector('button#submit-profile-pic');
submitProfilePictureButton.addEventListener('click', (e) => {
    let pictureInput = document.querySelector('input[type="file"]');
    let formData = new FormData();
    formData.append(`${sessionUsername}`, pictureInput.files[0]);

    /*Send profile picture to user.php for processing*/
    fetch(
        "/scripts/set-profile-pic.php", {
            method: "post",
            body: formData
        }
    ).then((response => {
        response.text().then((picture) => {
            console.warn('Picture: ' + picture);
        })
    }))
});


//ADAM
function readChat() {
    fetch(`/scripts/sent.php`)
        .then((res) => res.text())
        .then((res) => {
            let chatbox = document.querySelector('#chatbox');
            chatbox.innerHTML = res;
        });
    setTimeout(readChat, 1000);
}
readChat();



//Send Message

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
        }).then((data) => {
        console.log(data);
        document.querySelector('input[name="message"]').value = "";
    })
});


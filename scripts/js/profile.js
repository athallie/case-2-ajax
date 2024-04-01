localStorage.getItem("profile-picture");
let profilePic = document.querySelector("img#photo-profile");

/*Clear session storage on reload*/
window.addEventListener('load', (e) => {
    /*
    * Prevent default
    * */

    let pictureForm = document.querySelector('form#edit-profile-form');
    pictureForm.reset();
    pictureForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    changeImg(profilePic, localStorage.getItem("profile-picture"));
})

/*
* Submit Profile Picture
* */
let submitProfilePictureButton = document.querySelector('button#save-button');
submitProfilePictureButton.addEventListener('click', (e) => {
    let pictureInput = document.querySelector('input[type="file"]');
    let formData = new FormData();
    let newUsername = null;
    if (document.querySelector('input[type="text"]').value.trim() !== '') {
        newUsername = document.querySelector('input[type="text"]').value;
    } else {
        newUsername = sessionStorage.getItem('username');
    }

    /*Send username change*/
    fetch(
        "../scripts/php/username.php", {
            method: "post",
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: "username=" + newUsername
        }
    ).then((response => {
        response.text().then((username) => {
            console.warn('Username: ' + newUsername);
            sessionStorage.setItem("username", newUsername);
            formData.append(newUsername, pictureInput.files[0]);
            /*Send profile picture to username.php for processing*/
            fetch(
                "../scripts/php/profilepic.php", {
                    method: "post",
                    body: formData
                }
            ).then((response => {
                response.text().then((picture) => {
                    console.warn('Picture: ' + picture);
                    let src = `/Kode/data/profile-pics/${picture}`;
                    changeImg(profilePic, src);
                    location.reload();
                })
            }))
        })
    }))
});

let backButton = document.querySelector("button#back-button");
backButton.addEventListener("click", (e) => {
    window.history.back();
})

function changeImg(img, src) {
    img.src = src;
    localStorage.setItem("profile-picture", src);
}
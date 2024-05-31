let profilePic = document.querySelector("img#photo-profile");
let backButton = document.querySelector("button#back-button");
let submitProfilePictureButton = document.querySelector('button#save-button');
let username = document.querySelector("h5#username");

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

    changeImg(profilePic, localStorage.getItem("profile-pics"));
    username.innerHTML = sessionStorage.getItem("username");
})

/*
* Submit Profile Picture
* */
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
        "scripts/php/username.php", {
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
                "scripts/php/profilepic.php", {
                    method: "post",
                    body: formData
                }
            ).then((response => {
                response.text().then((picture) => {
                    console.warn('Picture: ' + picture);
                    let src = `/data/profile-pics/${picture}`;
                    localStorage.setItem("profile-pics", src);
                    location.reload();
                })
            }))
        })
    }))
});


backButton.addEventListener("click", (e) => {
    window.history.back();
    //@Kelompok 1 PemWeb E Semester Genap 2023/2024
})

function changeImg(img, src) {
    img.src = src;
    localStorage.setItem("profile-pics", src);
}
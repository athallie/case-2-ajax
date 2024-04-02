/*Fab Control*/
let fabUsername = document.querySelector("button#fab-username");
let chatBox = document.querySelector("iframe#main-iframe");
fabUsername.addEventListener("click", (e) => {
    if (chatBox.style.opacity === "1") {
        chatBox.style.opacity = "0";
        fabUsername.style.translate = "0em";
        chatBox.style.translate = "-5em"
    } else {
        chatBox.style.opacity = "1";
        fabUsername.style.translate = "-12em";
        chatBox.style.translate = "1em";
    }
});
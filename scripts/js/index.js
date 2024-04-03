/*Fab Control*/
let fabUsername = document.querySelector("button#fab-username");
let chatBox = document.querySelector("iframe#main-iframe");
fabUsername.addEventListener("click", (e) => {
    if (chatBox.style.opacity === "1") {
        chatBox.style.opacity = "0";
        chatBox.style.translate = "0 0em"
        fabUsername.style.borderWidth = "0px"
        fabUsername.style.boxShadow = "0 0 0 0"
    } else {
        // @Kelompok 1 PemWeb E Semester Genap 2023/2024
        chatBox.style.opacity = "1";
        chatBox.style.translate = "0 -3em";
        fabUsername.style.boxShadow = "0px 0px 5px blue"
    }
});
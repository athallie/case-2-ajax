
let profil = document.querySelector("h4#profil-name");
profil.innerHTML = sessionStorage.getItem("username");
let profilepicture = document.querySelector("img#profil-foto");

window.addEventListener('load', (e) => {
  
      let chatForm = document.querySelector('form#chat-form');
      chatForm.reset();
      document.querySelector("button#send-chat").disabled = true;
      chatForm.addEventListener('submit', (e) => {
          e.preventDefault();
      });
})

let breadCrumbs = document.querySelector("button#breadcrumbs-container");
breadCrumbs.addEventListener("click", (e) => {

    window.location.href = `settings.html`;
});


//ADAM
function loadChat() {
    $.ajax({
        url: 'scripts/php/sent.php',
        type: 'GET',
        success: function(response) {
            $('#chat-contents').html(response);
        }
    });
}

setInterval(function() {
    loadChat();
}, 300);

function scrollBottom() {
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

// @Kelompok 1 PemWeb E Semester Genap 2023/2024

//Send Message

let sendButton = document.querySelector('button#send-message-button');
sendButton.addEventListener('click', (e) => {
    let formData = {
        "username": sessionStorage.getItem('username'),
        "message": document.querySelector('input[name="message"]').value,
        "date": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }
    console.log(JSON.stringify(formData));

    fetch(
        "scripts/php/chat.php", {
            method: "post",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }).then((data) => {
        console.log(data);
        document.querySelector('input[name="message"]').value = "";
    })
})
